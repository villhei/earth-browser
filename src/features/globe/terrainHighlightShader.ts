import * as THREE from "three"
import { Language } from "../../i18n/types"

/** Default duration (in seconds) for the terrain highlight shader pulse. */
export const DEFAULT_TERRAIN_HIGHLIGHT_DURATION = 3.5

/** Standard equirectangular texture resolution for prehistoric masks. */
export const TERRAIN_MASK_RESOLUTION = new THREE.Vector2(4096, 2048)

export type TerrainHighlightStyle = "contents" | "outline"

export interface TerrainHighlightColors {
  primary: THREE.Color
  secondary: THREE.Color
  label: string
}

/** Prehistoric eras featuring sea level modifications and reconstructed coastlines. */
const PREHISTORIC_ERA_SLUGS = new Set([
  "world-bc123000",
  "world-bc10000",
  "world-bc8000",
  "world-bc5000",
])

/**
 * Checks whether an era has prehistoric terrain/coastal alterations.
 */
export function hasTerrainHighlight(eraSlug?: string): boolean {
  return !!eraSlug && PREHISTORIC_ERA_SLUGS.has(eraSlug)
}

/**
 * Returns customized palette colors based on whether sea levels were higher
 * (flooded lowlands) or lower (exposed continental land bridges).
 */
export function getTerrainHighlightColors(
  eraSlug?: string,
  language: Language = "en",
): TerrainHighlightColors {
  switch (eraSlug) {
    case "world-bc123000":
      // Eemian Interglacial: high sea levels (+7m) flooded coastal plains worldwide.
      // Radiant oceanic azure and electric sea-cyan glow.
      return {
        primary: new THREE.Color("#00d2ff"),
        secondary: new THREE.Color("#7df9ff"),
        label:
          language === "fi"
            ? "Meren alle jääneet rannikot (+7m merenpinta)"
            : "Submerged Coastal Lowlands (+7m Sea Level)",
      }
    case "world-bc10000":
      // Last Glacial Maximum aftermath: -120m sea level, exposing Doggerland, Sundaland, Beringia.
      // Brilliant warm amber-gold and emerald-gold shore luminescence.
      return {
        primary: new THREE.Color("#fbbf24"),
        secondary: new THREE.Color("#34d399"),
        label:
          language === "fi"
            ? "Paljastuneet mannerjalustat ja maasillat (-120m merenpinta)"
            : "Exposed Continental Shelves & Land Bridges (-120m Sea Level)",
      }
    case "world-bc8000":
      // Early Holocene: -50m sea level, shrinking Doggerland and Asian shelves.
      // Sun-gold and vibrant turquoise coastal rim.
      return {
        primary: new THREE.Color("#f59e0b"),
        secondary: new THREE.Color("#38bdf8"),
        label:
          language === "fi"
            ? "Paljastuneet maasillat ja rannikkotasangot (-50m merenpinta)"
            : "Exposed Land Bridges & Coastal Shelves (-50m Sea Level)",
      }
    case "world-bc5000":
      // Mid Holocene: -15m sea level, final stages of prehistoric coastal exposure.
      // Warm amber with ocean tide accent.
      return {
        primary: new THREE.Color("#f97316"),
        secondary: new THREE.Color("#60a5fa"),
        label:
          language === "fi"
            ? "Paljastuneet rannikkokaistaleet (-15m merenpinta)"
            : "Exposed Coastal Margins (-15m Sea Level)",
      }
    default:
      return {
        primary: new THREE.Color("#fbbf24"),
        secondary: new THREE.Color("#38bdf8"),
        label:
          language === "fi"
            ? "Muuttuneet esihistorialliset rantaviivat"
            : "Altered Prehistoric Coastlines",
      }
  }
}

/**
 * Computes the smooth animation envelope for a given progress (0.0 to 1.0):
 * - Quick rise (0.0 to 0.12): smooth fade-in to full visibility
 * - Active sustain (0.12 to 0.70): 100% full visibility with breathing pulsation
 * - Smooth decay (0.70 to 1.00): smooth dissolution back to base terrain
 * Values < 0.0 indicate persistent sustain mode (envelope = 1.0).
 */
export function calculateHighlightEnvelope(progress: number): number {
  if (progress < 0.0) return 1.0
  const p = Math.min(1.0, progress)
  if (p >= 1.0) return 0.0
  if (p < 0.12) {
    const t = p / 0.12
    return t * t * (3.0 - 2.0 * t) // smoothstep
  }
  if (p < 0.70) {
    return 1.0
  }
  const t = (p - 0.70) / 0.30
  return 1.0 - t * t * (3.0 - 2.0 * t) // smoothstep decay
}

export const TERRAIN_HIGHLIGHT_VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const TERRAIN_HIGHLIGHT_FRAGMENT_SHADER = /* glsl */ `
uniform sampler2D uMaskTexture;
uniform float uProgress;        // 0.0 -> 1.0 (or < 0.0 for continuous sustain)
uniform float uTime;            // elapsed seconds
uniform vec3 uHighlightColor;
uniform vec3 uSecondaryColor;
uniform vec2 uResolution;       // mask dimensions (4096.0, 2048.0)
uniform float uIntensity;       // intensity multiplier (default 1.0)
uniform float uHighlightStyle;  // 0.0 = Contents (Land Bridges), 1.0 = Outlines (Coastlines)

varying vec2 vUv;
varying vec3 vNormal;

void main() {
  if (uProgress >= 1.0) {
    discard;
  }

  // Seamless equirectangular U wrapping and Y clamping
  vec2 uvC = vec2(fract(vUv.x), clamp(vUv.y, 0.0, 1.0));
  vec4 maskSample = texture2D(uMaskTexture, uvC);
  float aC = maskSample.a;

  // Sample spacing for edge and neighborhood queries
  vec2 texel = 2.5 / uResolution;

  float aL = texture2D(uMaskTexture, vec2(fract(uvC.x - texel.x), uvC.y)).a;
  float aR = texture2D(uMaskTexture, vec2(fract(uvC.x + texel.x), uvC.y)).a;
  float aB = texture2D(uMaskTexture, vec2(uvC.x, clamp(uvC.y - texel.y, 0.0, 1.0))).a;
  float aT = texture2D(uMaskTexture, vec2(uvC.x, clamp(uvC.y + texel.y, 0.0, 1.0))).a;

  float maxA = max(aC, max(max(aL, aR), max(aB, aT)));

  // Fast discard for unmodified regions of Earth (over 96% of the globe)
  if (maxA < 0.02) {
    discard;
  }

  // Temporal envelope calculation (smooth in, sustained, smooth out)
  float envelope = 0.0;
  if (uProgress < 0.0) {
    envelope = 1.0;
  } else if (uProgress < 0.12) {
    envelope = smoothstep(0.0, 0.12, uProgress);
  } else if (uProgress < 0.70) {
    envelope = 1.0;
  } else {
    envelope = 1.0 - smoothstep(0.70, 1.0, uProgress);
  }

  // Subtle breathing pulse across the active duration
  float pulse = 0.85 + 0.15 * sin(uTime * 6.28318);

  // Dual-frequency energy shimmer wave rippling across coordinates
  float wave1 = sin(vUv.x * 50.0 + vUv.y * 25.0 - uTime * 4.0) * 0.5 + 0.5;
  float wave2 = sin(vUv.x * 30.0 - vUv.y * 60.0 + uTime * 2.5) * 0.5 + 0.5;
  float shimmer = 0.88 + 0.25 * (wave1 * 0.6 + wave2 * 0.4);

  // Dynamic era color gradient
  vec3 eraColor = mix(uHighlightColor, uSecondaryColor, wave1 * 0.45);

  vec3 finalColor;
  float totalAlpha;

  if (uHighlightStyle < 0.5) {
    // -------------------------------------------------------------
    // STYLE 0: HIGHLIGHT CONTENTS OF THE TEXTURE ITSELF (LAND BRIDGES)
    // -------------------------------------------------------------
    // Discard outside the actual land bridge feature
    if (aC < 0.02) {
      discard;
    }

    // Photographic/satellite terrain artwork of the exposed land bridge or flooded margin
    vec3 terrainColor = maskSample.rgb;
    float lum = dot(terrainColor, vec3(0.299, 0.587, 0.114));

    // Boost terrain contrast & detail so topographical features (rivers, hills, plains) pop
    vec3 boostedTerrain = terrainColor * (1.30 + 0.30 * shimmer);

    // Infuse the land bridge surface with radiant era luminescence
    vec3 featureRadiance = eraColor * (lum * 0.70 + 0.45) * (shimmer * 1.25);
    finalColor = boostedTerrain + featureRadiance * 0.70;

    // Soft shoreline feathering for a natural coastal transition (no artificial outline)
    float feather = smoothstep(0.02, 0.15, aC);
    totalAlpha = feather * clamp(0.75 + 0.25 * shimmer, 0.0, 0.98) * envelope * pulse * uIntensity;
  } else {
    // -------------------------------------------------------------
    // STYLE 1: COASTLINE OUTLINES & BOUNDARIES
    // -------------------------------------------------------------
    float aTL = texture2D(uMaskTexture, vec2(fract(uvC.x - texel.x), clamp(uvC.y + texel.y, 0.0, 1.0))).a;
    float aTR = texture2D(uMaskTexture, vec2(fract(uvC.x + texel.x), clamp(uvC.y + texel.y, 0.0, 1.0))).a;
    float aBL = texture2D(uMaskTexture, vec2(fract(uvC.x - texel.x), clamp(uvC.y - texel.y, 0.0, 1.0))).a;
    float aBR = texture2D(uMaskTexture, vec2(fract(uvC.x + texel.x), clamp(uvC.y - texel.y, 0.0, 1.0))).a;

    float minA = min(aC, min(min(aL, aR), min(aB, aT)));
    minA = min(minA, min(min(aTL, aTR), min(aBL, aBR)));
    float edge = clamp((maxA - minA) * 1.6, 0.0, 1.0);

    vec3 interiorGlow = eraColor * shimmer;
    vec3 edgeOutline = mix(uSecondaryColor, vec3(1.0, 1.0, 1.0), 0.75);
    finalColor = mix(interiorGlow, edgeOutline, edge);

    float interiorAlpha = aC * 0.42;
    float edgeAlpha = edge * 0.68;
    totalAlpha = clamp(interiorAlpha + edgeAlpha, 0.0, 0.95) * envelope * pulse * uIntensity;
  }

  if (totalAlpha < 0.008) {
    discard;
  }

  gl_FragColor = vec4(finalColor, totalAlpha);
}
`

/** Fallback 1x1 transparent dummy texture to avoid WebGL sampler warnings. */
let fallbackTexture: THREE.DataTexture | null = null
function getFallbackTexture(): THREE.DataTexture {
  if (!fallbackTexture) {
    fallbackTexture = new THREE.DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1, THREE.RGBAFormat)
    fallbackTexture.needsUpdate = true
  }
  return fallbackTexture
}

export function createTerrainHighlightMaterial(
  maskTexture?: THREE.Texture | null,
  eraSlug?: string,
  options?: { intensity?: number; style?: TerrainHighlightStyle }
): THREE.ShaderMaterial {
  const colors = getTerrainHighlightColors(eraSlug)
  const styleValue = options?.style === "outline" ? 1.0 : 0.0

  return new THREE.ShaderMaterial({
    uniforms: {
      uMaskTexture: { value: maskTexture ?? getFallbackTexture() },
      uProgress: { value: 1.0 }, // starts completed/dormant
      uTime: { value: 0.0 },
      uHighlightColor: { value: colors.primary },
      uSecondaryColor: { value: colors.secondary },
      uResolution: { value: TERRAIN_MASK_RESOLUTION.clone() },
      uIntensity: { value: options?.intensity ?? 1.0 },
      uHighlightStyle: { value: styleValue },
    },
    vertexShader: TERRAIN_HIGHLIGHT_VERTEX_SHADER,
    fragmentShader: TERRAIN_HIGHLIGHT_FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    blending: THREE.NormalBlending,
  })
}

/**
 * Updates an existing terrain highlight material with a new texture, style, or era palette
 * without rebuilding shader programs.
 */
export function updateTerrainHighlightMaterial(
  material: THREE.ShaderMaterial,
  options: {
    maskTexture?: THREE.Texture | null
    eraSlug?: string
    intensity?: number
    style?: TerrainHighlightStyle
  }
): void {
  if (options.eraSlug !== undefined) {
    const colors = getTerrainHighlightColors(options.eraSlug)
    material.uniforms.uHighlightColor.value.copy(colors.primary)
    material.uniforms.uSecondaryColor.value.copy(colors.secondary)
  }
  if (options.maskTexture !== undefined) {
    material.uniforms.uMaskTexture.value = options.maskTexture ?? getFallbackTexture()
  }
  if (options.intensity !== undefined) {
    material.uniforms.uIntensity.value = options.intensity
  }
  if (options.style !== undefined) {
    material.uniforms.uHighlightStyle.value = options.style === "outline" ? 1.0 : 0.0
  }
  material.uniformsNeedUpdate = true
}
