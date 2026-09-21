import { afterEach, describe, expect, it, vi } from "vitest"
import * as THREE from "three"
import ConicPolygonGeometry from "three-conic-polygon-geometry"
import { GeoJSONFeature } from "../../types"
import { clearPolygonMaterialCache } from "./polygonMaterials"
import { isSphereBehindGlobe, PolygonScene } from "./polygonScene"

// This geometry dependency reads window.THREE even when no renderer is used.
vi.hoisted(() => vi.stubGlobal("window", {}))

afterEach(clearPolygonMaterialCache)

const options = { opacity: 0.55, selectedFeatureId: null, hoveredFeatureId: null }
const camera = new THREE.PerspectiveCamera(45, 1, 1, 2000)
camera.position.z = 320
camera.lookAt(0, 0, 0)

function polygon(lng: number, id: string) {
  const coords = [[[lng - 1, -1], [lng - 1, 1], [lng + 1, 1], [lng + 1, -1], [lng - 1, -1]]]
  const feature: GeoJSONFeature = {
    type: "Feature", id, properties: { name: id },
    geometry: { type: "Polygon", coordinates: coords },
  }
  const group = Object.assign(new THREE.Group(), {
    __globeObjType: "polygon",
    __data: { data: feature },
  })
  const mesh = new THREE.Mesh(
    new ConicPolygonGeometry(coords, 0, 100, false, true, true, 1),
    [new THREE.MeshBasicMaterial(), new THREE.MeshBasicMaterial()],
  )
  mesh.scale.setScalar(1.002)
  group.add(mesh)
  return { group, mesh, feature }
}

describe("polygon horizon culling", () => {
  it("culls only complete bounds beyond the horizon", () => {
    const behind = (x: number, z: number, radius: number) => isSphereBehindGlobe(
      new THREE.Sphere(new THREE.Vector3(x, 0, z), radius), camera.position, 100,
    )
    expect(behind(0, -100, 3)).toBe(true)
    expect(behind(0, 100, 3)).toBe(false)
    expect(behind(95, 31.25, 5)).toBe(false) // crosses horizon
    expect(behind(125, -10, 3)).toBe(false) // elevated outside silhouette
    expect(behind(0, 0, 120)).toBe(false) // continent spanning hemispheres
    expect(isSphereBehindGlobe(new THREE.Sphere(new THREE.Vector3(), 1), new THREE.Vector3(0, 0, 90), 100)).toBe(false)
  })

  it("never culls a bound containing sampled points visible outside Earth", () => {
    for (const distance of [140, 320, 700]) {
      const eye = new THREE.Vector3(0, 0, distance)
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        for (const elevation of [100, 103, 115]) {
          const center = new THREE.Vector3(Math.sin(angle) * elevation, 0, Math.cos(angle) * elevation)
          const sphere = new THREE.Sphere(center, 5)
          if (!isSphereBehindGlobe(sphere, eye, 100)) continue
          for (let sample = 0; sample < Math.PI * 2; sample += 0.2) {
            const point = center.clone().add(new THREE.Vector3(Math.sin(sample) * 5, 0, Math.cos(sample) * 5))
            if (point.length() < 100) continue
            const ray = new THREE.Ray(eye, point.clone().sub(eye).normalize())
            const hit = ray.intersectSphere(new THREE.Sphere(new THREE.Vector3(), 100), new THREE.Vector3())
            expect(hit).not.toBeNull()
            expect(hit!.distanceTo(eye)).toBeLessThan(point.distanceTo(eye))
          }
        }
      }
    }
  })
})

describe("PolygonScene", () => {
  it("excludes hidden countries and decorations from picking and follows rotation", () => {
    const globe = new THREE.Group()
    const front = polygon(0, "France")
    const back = polygon(180, "Japan")
    globe.add(front.group, back.group, new THREE.Mesh(new THREE.SphereGeometry(100)))
    const scene = new PolygonScene()
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    expect(front.group.visible).toBe(true)
    expect(back.group.visible).toBe(false)
    expect(scene.pickableMeshes).toEqual([front.mesh])
    expect(front.mesh.geometry.boundingBox).not.toBeNull()
    expect(scene.update(globe, camera, 100, options)).toBe(false)
    globe.rotation.y = Math.PI
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    expect(scene.pickableMeshes).toEqual([back.mesh])
  })

  it("changes only cap materials when hovering/selecting and restores stripes", () => {
    const globe = new THREE.Group()
    const first = polygon(0, "France")
    first.feature.properties.SUBJECTO = "Roman Empire"
    const second = polygon(20, "Japan")
    globe.add(first.group, second.group)
    const scene = new PolygonScene()
    scene.update(globe, camera, 100, options)
    const original = first.mesh.material[1]
    const other = second.mesh.material[1]
    const side = first.mesh.material[0]
    const geometry = first.mesh.geometry
    expect(scene.update(globe, camera, 100, { ...options, hoveredFeatureId: "France" })).toBe(true)
    expect(first.mesh.material[1]).not.toBe(original)
    expect(second.mesh.material[1]).toBe(other)
    expect(first.mesh.material[0]).toBe(side)
    expect(first.mesh.geometry).toBe(geometry)
    scene.update(globe, camera, 100, { ...options, selectedFeatureId: "France" })
    expect(first.mesh.material[1].opacity).toBe(0.85)
    scene.update(globe, camera, 100, options)
    expect(first.mesh.material[1]).toBe(original)
  })

  it("detects deferred data, geometry, altitude, and removal changes for idle rendering", () => {
    const globe = new THREE.Group()
    const { group, mesh, feature } = polygon(0, "France")
    const scene = new PolygonScene()
    scene.update(globe, camera, 100, options)
    globe.add(group)
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    expect(scene.update(globe, camera, 100, options)).toBe(false)
    group.__data = { data: feature }
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    mesh.scale.setScalar(1.02)
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    mesh.geometry = polygon(0, "France").mesh.geometry
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    expect(scene.update(globe, camera, 100, options)).toBe(false)
    globe.remove(group)
    expect(scene.update(globe, camera, 100, options)).toBe(true)
    expect(scene.pickableMeshes).toEqual([])
  })
})
