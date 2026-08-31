import * as THREE from "three"
import GeoJsonGeometry from "three-geojson-geometry"
import { GeoJSONFeature } from "../../types"
import { getBorderPrecision, isNeutralOrUnclaimed } from "./colors"

/**
 * Builds a curved spherical ribbon mesh for all polygon borders.
 * Uses GeoJsonGeometry so every border line follows the EXACT spherical curvature tessellation
 * of the 3D polygon caps without sinking or clipping.
 * 
 * Line thickness is scaled inversely by border precision:
 * - Precision 1 (Frontier / Uncertain): ~2.40 degrees bold boundary swath
 * - Precision 2 (Approximate / Regional): ~1.20 degrees medium border band
 * - Precision 3 (Exact / Surveyed): ~0.35 degrees defined surveyed line
 */
export function createBorderLineMesh(
  features: GeoJSONFeature[],
  options: {
    globeRadius?: number
    layerAltitude?: number
    strokeColor?: string
    capCurvatureResolution?: number
  } = {}
): THREE.Mesh | null {
  const radius = options.globeRadius || 100
  const altitude = options.layerAltitude !== undefined ? options.layerAltitude : 0.005
  const strokeHex = options.strokeColor || "#000000"
  const resolution = options.capCurvatureResolution || 3

  const baseColor = new THREE.Color(strokeHex)
  const R = radius * (1 + altitude + 0.0003) // Floating directly on top of polygon caps

  const positions: number[] = []
  const colors: number[] = []
  const alphas: number[] = []
  const indices: number[] = []

  let vertexOffset = 0

  for (const feat of features) {
    const props = feat.properties || {}
    const name = props.name || props.NAME || ""
    if (props.is_unclaimed || isNeutralOrUnclaimed(name)) continue

    const geom = feat.geometry
    if (!geom || (geom.type !== "Polygon" && geom.type !== "MultiPolygon")) continue

    const precision = getBorderPrecision(props)

    // Angular width in spherical degrees (curvature-aware):
    // Precision 1: 2.4 deg (~267 km broad frontier band)
    // Precision 2: 1.2 deg (~133 km medium regional border)
    // Precision 3: 0.35 deg (~39 km surveyed line)
    const widthDeg = precision === 1 ? 2.4 : precision === 2 ? 1.2 : 0.35
    const widthRad = (widthDeg * Math.PI) / 180
    const hw = Math.sin(widthRad / 2)
    const lineAlpha = precision === 1 ? 0.8 : precision === 2 ? 0.9 : 0.95

    // Generate curvature-tessellated geometry matching ConicPolygonGeometry
    const geoJsonGeom = new GeoJsonGeometry(geom as any, radius, resolution)
    const posAttr = geoJsonGeom.getAttribute("position")
    const indexAttr = geoJsonGeom.getIndex()

    if (!posAttr || !indexAttr) {
      geoJsonGeom.dispose()
      continue
    }

    const indArray = indexAttr.array

    for (let i = 0; i < indArray.length; i += 2) {
      const ia = indArray[i]
      const ib = indArray[i + 1]

      const pa = new THREE.Vector3(posAttr.getX(ia), posAttr.getY(ia), posAttr.getZ(ia))
      const pb = new THREE.Vector3(posAttr.getX(ib), posAttr.getY(ib), posAttr.getZ(ib))

      const sa = pa.clone().normalize()
      const sb = pb.clone().normalize()
      const segDir = new THREE.Vector3().subVectors(pb, pa).normalize()

      if (segDir.lengthSq() < 1e-6) continue

      const na = new THREE.Vector3().crossVectors(sa, segDir).normalize()
      const nb = new THREE.Vector3().crossVectors(sb, segDir).normalize()

      const al = pa.clone().addScaledVector(na, -hw).normalize().multiplyScalar(R)
      const ar = pa.clone().addScaledVector(na, hw).normalize().multiplyScalar(R)
      const bl = pb.clone().addScaledVector(nb, -hw).normalize().multiplyScalar(R)
      const br = pb.clone().addScaledVector(nb, hw).normalize().multiplyScalar(R)

      const baseIdx = vertexOffset

      positions.push(
        al.x, al.y, al.z,
        ar.x, ar.y, ar.z,
        bl.x, bl.y, bl.z,
        br.x, br.y, br.z
      )

      for (let v = 0; v < 4; v++) {
        colors.push(baseColor.r, baseColor.g, baseColor.b)
        alphas.push(lineAlpha)
      }

      // 2 triangles per curved segment quad
      indices.push(
        baseIdx + 0, baseIdx + 1, baseIdx + 2,
        baseIdx + 2, baseIdx + 1, baseIdx + 3
      )

      vertexOffset += 4
    }

    geoJsonGeom.dispose()
  }

  if (positions.length === 0) return null

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  geometry.setAttribute("aAlpha", new THREE.Float32BufferAttribute(alphas, 1))
  geometry.setIndex(indices)

  const material = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = color;
        vAlpha = aAlpha;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        gl_FragColor = vec4(vColor, vAlpha);
      }
    `,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.renderOrder = 10 // Guaranteed to draw on top of polygon caps
  return mesh
}
