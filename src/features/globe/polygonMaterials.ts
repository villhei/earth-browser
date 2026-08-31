import * as THREE from "three"
import { GeoJSONFeature } from "../../types"
import {
  getCountryColor,
  getSubjugationInfo,
  getBorderPrecision,
  isNeutralOrUnclaimed,
  HIGHLIGHT_COLOR,
} from "./colors"

// Global material cache keyed by deterministic string
const materialCache = new Map<string, THREE.Material>()

/**
 * Creates or retrieves a cached Three.js material for a polygon cap.
 * Supports:
 * - Solid colors with PARTOF parent inheritance
 * - Subjugation striped patterns (SUBJECTO) in spherical coordinates
 * - Border precision edge blur / softness
 * - Selected and hover states
 */
export function getPolygonCapMaterial(
  feature: GeoJSONFeature,
  options: {
    opacity: number
    selectedFeatureId: string | null
    hoveredFeatureId: string | null
  }
): THREE.Material {
  const props = feature.properties || {}
  const name = props.name || props.NAME || ""
  const isUnclaimed = props.is_unclaimed || isNeutralOrUnclaimed(name)

  if (isUnclaimed) {
    const key = "unclaimed"
    if (!materialCache.has(key)) {
      materialCache.set(
        key,
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.FrontSide,
        })
      )
    }
    return materialCache.get(key)!
  }

  const isSelected = !!(
    options.selectedFeatureId &&
    (String(feature.id) === String(options.selectedFeatureId) ||
      name === options.selectedFeatureId ||
      props.name === options.selectedFeatureId ||
      props.formal_name === options.selectedFeatureId)
  )
  const isHovered = !!(
    options.hoveredFeatureId &&
    (String(feature.id) === String(options.hoveredFeatureId) ||
      name === options.hoveredFeatureId ||
      props.name === options.hoveredFeatureId ||
      props.formal_name === options.hoveredFeatureId)
  )

  const subjugation = getSubjugationInfo(name, props)
  const precision = getBorderPrecision(props)
  const isStriped = subjugation.isSubjugated && !isSelected && !isHovered

  // Base color or striping colors
  const primaryColor = isSelected
    ? HIGHLIGHT_COLOR
    : isHovered
    ? HIGHLIGHT_COLOR
    : subjugation.isSubjugated
    ? subjugation.culturalColor
    : getCountryColor(name, props)

  const secondaryColor = isStriped ? subjugation.suzerainColor : primaryColor
  const effectiveOpacity = isSelected ? 0.85 : isHovered ? 0.7 : options.opacity

  const cacheKey = [
    primaryColor,
    isStriped ? secondaryColor : "solid",
    effectiveOpacity.toFixed(2),
    precision,
    isSelected ? "sel" : isHovered ? "hov" : "norm",
  ].join("::")

  if (materialCache.has(cacheKey)) {
    return materialCache.get(cacheKey)!
  }

  // Create material
  const material = createPolygonMaterial({
    primaryColor,
    secondaryColor,
    isStriped,
    opacity: effectiveOpacity,
    precision,
  })

  materialCache.set(cacheKey, material)
  return material
}

/**
 * Procedural shader material creating anti-aliased diagonal stripes in spherical coordinates
 * for subjugated territories, or solid MeshBasicMaterial for standard territories.
 */
function createPolygonMaterial(params: {
  primaryColor: string
  secondaryColor: string
  isStriped: boolean
  opacity: number
  precision: 1 | 2 | 3
}): THREE.Material {
  const colA = new THREE.Color(params.primaryColor)
  const colB = new THREE.Color(params.secondaryColor)

  if (!params.isStriped) {
    return new THREE.MeshBasicMaterial({
      color: colA,
      transparent: params.opacity < 1,
      opacity: params.opacity,
      side: THREE.FrontSide,
      depthWrite: true,
    })
  }

  // Striped MeshBasicMaterial with onBeforeCompile for subjugation (SUBJECTO)
  const material = new THREE.MeshBasicMaterial({
    color: colA,
    transparent: true,
    opacity: params.opacity,
    side: THREE.FrontSide,
    depthWrite: true,
  })

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uColA = { value: colA }
    shader.uniforms.uColB = { value: colB }
    shader.uniforms.uBaseOpacity = { value: params.opacity }

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
      #include <common>
      varying vec3 vSpherePos;
      `
    )

    shader.vertexShader = shader.vertexShader.replace(
      "#include <worldpos_vertex>",
      `
      #include <worldpos_vertex>
      vSpherePos = normalize(transformed);
      `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `
      #include <common>
      uniform vec3 uColA;
      uniform vec3 uColB;
      uniform float uBaseOpacity;
      varying vec3 vSpherePos;
      `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `
      #include <dithering_fragment>

      // Spherical diagonal coordinates for subjugation striping
      float lon = atan(vSpherePos.z, vSpherePos.x);
      float lat = asin(clamp(vSpherePos.y, -1.0, 1.0));
      
      // 45-degree diagonal stripe pattern
      float stripeCoord = (lon * 2.0 + lat * 3.0) * 14.0;
      float stripe = smoothstep(0.42, 0.58, fract(stripeCoord));
      vec3 finalCol = mix(uColA, uColB, stripe);

      gl_FragColor = vec4(finalCol, uBaseOpacity);
      `
    )
  }

  return material
}

/**
 * Clears material cache (e.g. on unmount)
 */
export function clearPolygonMaterialCache() {
  materialCache.forEach((mat) => mat.dispose())
  materialCache.clear()
}
