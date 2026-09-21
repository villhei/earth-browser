import * as THREE from "three"
import { GeoJSONFeature } from "../../types"
import { getPolygonCapMaterial } from "./polygonMaterials"

type MaterialOptions = Parameters<typeof getPolygonCapMaterial>[1]

/** Conservative sphere test: the entire bound must lie inside Earth's shadow cone
 * and beyond its tangent plane. Bounds touching the horizon remain visible. */
export function isSphereBehindGlobe(
  sphere: THREE.Sphere,
  camera: THREE.Vector3,
  globeRadius: number,
): boolean {
  const distance = camera.length()
  if (distance <= globeRadius) return false
  const along = sphere.center.dot(camera) / distance
  if (along + sphere.radius >= globeRadius * globeRadius / distance) return false
  const lateral = Math.sqrt(Math.max(0, sphere.center.lengthSq() - along * along))
  const sinAngle = globeRadius / distance
  const cosAngle = Math.sqrt(1 - sinAngle * sinAngle)
  return (distance - along) * sinAngle - lateral * cosAngle > sphere.radius
}

/** ThreeGlobe's conic side walls extend to the origin. That origin is already
 * occluded by Earth; bound the outer vertices for useful horizon culling. The
 * shadow cone is convex, so the connecting side walls are also fully hidden. */
function surfaceBounds(geometry: THREE.BufferGeometry): THREE.Sphere {
  const box = new THREE.Box3()
  const point = new THREE.Vector3()
  const positions = geometry.getAttribute("position")
  for (let i = 0; i < positions.count; i++) {
    point.fromBufferAttribute(positions, i)
    if (point.lengthSq() > 1e-12) box.expandByPoint(point)
  }
  // Mesh.raycast otherwise skips its inexpensive bounding-box rejection.
  geometry.computeBoundingBox()
  return box.getBoundingSphere(new THREE.Sphere())
}

/** Isolates the ThreeGlobe polygon scene contract (polygon group, __data.data,
 * and [side, cap] materials). Scan the cheap object tree to handle its deferred
 * updates, multipolygon islands, and altitude animations without stale indexes. */
export class PolygonScene {
  readonly pickableMeshes: THREE.Mesh[] = []
  private bounds = new WeakMap<THREE.BufferGeometry, THREE.Sphere>()
  private materials = new WeakMap<GeoJSONFeature, {
    opacity: number
    selected: boolean
    hovered: boolean
    material: THREE.Material
  }>()
  private states = new WeakMap<THREE.Mesh, {
    data: unknown
    scale: number
    visible: boolean
    geometry: THREE.BufferGeometry
    material: THREE.Material
  }>()
  private lastMatrix = new THREE.Matrix4()
  private lastVisible = false
  private lastCount = 0
  private sphere = new THREE.Sphere()
  private globeCenter = new THREE.Vector3()
  private cameraPosition = new THREE.Vector3()
  private scale = new THREE.Vector3()

  update(globe: THREE.Object3D, camera: THREE.Camera, radius: number, options: MaterialOptions) {
    this.pickableMeshes.length = 0
    globe.updateWorldMatrix(true, true)
    let changed = !this.lastMatrix.equals(globe.matrixWorld) || this.lastVisible !== globe.visible
    this.lastMatrix.copy(globe.matrixWorld)
    this.lastVisible = globe.visible
    let count = 0
    globe.getWorldPosition(this.globeCenter)
    camera.getWorldPosition(this.cameraPosition).sub(this.globeCenter)
    const worldRadius = radius * globe.getWorldScale(this.scale).x

    globe.traverse((object) => {
      const polygon = object as THREE.Object3D & {
        __globeObjType?: string
        __data?: { data?: GeoJSONFeature }
      }
      if (polygon.__globeObjType !== "polygon") return
      const feature = polygon.__data?.data
      const mesh = polygon.children[0] as THREE.Mesh
      if (!feature || !mesh?.isMesh || !Array.isArray(mesh.material)) return
      count++

      let bound = this.bounds.get(mesh.geometry)
      if (!bound) {
        bound = surfaceBounds(mesh.geometry)
        this.bounds.set(mesh.geometry, bound)
      }
      this.sphere.copy(bound).applyMatrix4(mesh.matrixWorld)
      this.sphere.center.sub(this.globeCenter)
      // The border is drawn slightly above the cap by ThreeGlobe.
      this.sphere.radius += worldRadius * 1e-4
      polygon.visible = !isSphereBehindGlobe(this.sphere, this.cameraPosition, worldRadius)
      if (polygon.visible) this.pickableMeshes.push(mesh)

      const props = feature.properties || {}
      const matches = (id: string | null) => !!id && (
        String(feature.id) === id || (props.name || props.NAME) === id || props.formal_name === id
      )
      const selected = matches(options.selectedFeatureId)
      const hovered = matches(options.hoveredFeatureId)
      let cached = this.materials.get(feature)
      if (!cached || cached.opacity !== options.opacity ||
          cached.selected !== selected || cached.hovered !== hovered) {
        cached = {
          opacity: options.opacity,
          selected,
          hovered,
          material: getPolygonCapMaterial(feature, options),
        }
        this.materials.set(feature, cached)
      }
      // Both cap and side are enabled by HistoricalGlobe. Swap only the cap;
      // changing the accessor would run ThreeGlobe's full polygon update again.
      mesh.material[1] = cached.material
      const previous = this.states.get(mesh)
      if (!previous || previous.data !== polygon.__data || previous.scale !== mesh.scale.x ||
          previous.visible !== polygon.visible || previous.geometry !== mesh.geometry ||
          previous.material !== cached.material) {
        changed = true
        this.states.set(mesh, {
          data: polygon.__data,
          scale: mesh.scale.x,
          visible: polygon.visible,
          geometry: mesh.geometry,
          material: cached.material,
        })
      }
    })
    if (count !== this.lastCount) changed = true
    this.lastCount = count
    return changed
  }
}
