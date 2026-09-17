import type { SurfaceOverlay } from "./types"
import { SphereGeometry } from "three"

/** Match the globe's facets, with clearance below the minimum territory altitude (0.001). */
export function createSurfaceOverlayGeometry(radius: number, curvatureResolution: number): SphereGeometry {
  const segments = Math.max(4, Math.round(360 / curvatureResolution))
  return new SphereGeometry(radius * 1.0005, segments, segments / 2)
}

/** Coverage, including fractional edge pixels, comes exclusively from the source. */
export function applyCoverageAlpha(color: Uint8ClampedArray, coverage: Uint8ClampedArray): void {
  if (color.length !== coverage.length || color.length % 4 !== 0) {
    throw new Error("Overlay color and coverage must have matching RGBA dimensions")
  }
  for (let i = 3; i < color.length; i += 4) color[i] = coverage[i]
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error(`Could not load surface overlay: ${url}`))
    image.src = url
  })
}

/** Reproject only the decorative color; preserve the full-resolution coverage grid. */
export async function createSurfaceOverlayCanvas(overlay: SurfaceOverlay): Promise<HTMLCanvasElement> {
  const [color, coverage] = await Promise.all([
    loadImage(overlay.colorUrl),
    loadImage(overlay.coverageUrl),
  ])
  const canvas = document.createElement("canvas")
  canvas.width = coverage.naturalWidth
  canvas.height = coverage.naturalHeight
  const context = canvas.getContext("2d", { willReadFrequently: true })
  if (!context) throw new Error("Canvas is unavailable for the surface overlay")

  context.drawImage(coverage, 0, 0)
  const mask = context.getImageData(0, 0, canvas.width, canvas.height)
  // White fills missing artwork inside supported ice; generated alpha is only
  // a color blending weight and can neither add nor remove source coverage.
  context.fillStyle = "#ffffff"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.drawImage(color, 0, 0, canvas.width, canvas.height)
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height)
  applyCoverageAlpha(pixels.data, mask.data)
  context.putImageData(pixels, 0, 0)
  return canvas
}
