import type { Era } from "../types"
import type { GlobeView } from "../features/globe/types"
import {
  DEFAULT_GLOBE_VIEW,
  MAX_VIEW_DISTANCE,
  MIN_VIEW_DISTANCE,
} from "../features/globe/view"

function parseVector(value: string | null): GlobeView["position"] | null {
  if (!value) return null
  const parts = value.split(",")
  if (parts.length !== 3 || parts.some((part) => !part.trim())) return null
  const values = parts.map(Number)
  return values.every(Number.isFinite)
    ? values as GlobeView["position"]
    : null
}

export function readViewUrl(search: string) {
  const params = new URLSearchParams(search)
  const position = parseVector(params.get("camera"))
  const target = params.has("target")
    ? parseVector(params.get("target"))
    : DEFAULT_GLOBE_VIEW.target
  let view = DEFAULT_GLOBE_VIEW
  if (position && target) {
    const distance = Math.hypot(...position.map((value, i) => value - target[i]))
    // Allow the tiny error introduced by rounding URL coordinates.
    if (distance >= MIN_VIEW_DISTANCE - 0.001 && distance <= MAX_VIEW_DISTANCE + 0.001) {
      view = { position, target }
    }
  }
  return { eraSlug: params.get("era"), view }
}

export function resolveEra(eras: Era[], slug: string | null): Era | null {
  return eras.find((era) => era.slug === slug)
    ?? eras.find((era) => era.slug === "world-1492")
    ?? eras[0]
    ?? null
}

export function buildViewUrl(href: string, eraSlug: string | null, view: GlobeView): string {
  const url = new URL(href)
  if (eraSlug) url.searchParams.set("era", eraSlug)
  const format = (vector: number[]) => vector.map((value) => Number(value.toFixed(4))).join(",")
  url.searchParams.set("camera", format(view.position))
  url.searchParams.set("target", format(view.target))
  return `${url.pathname}${url.search}${url.hash}`
}

export function replaceViewUrl(eraSlug: string | null, view: GlobeView) {
  const next = buildViewUrl(window.location.href, eraSlug, view)
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (next !== current) window.history.replaceState(window.history.state, "", next)
}
