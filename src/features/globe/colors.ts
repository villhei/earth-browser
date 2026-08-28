import {
  resolveEntityMetadata,
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
  EntityMetadata,
} from "./historicalLineage"

export {
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
  type EntityMetadata,
} from "./historicalLineage"

export const DEFAULT_COUNTRY_COLOR = "#3b82f6"
export const HIGHLIGHT_COLOR = "#f59e0b"

/**
 * Returns the resolved hex/HSL color for any historical feature or country name.
 * Respects:
 * 1. Pre-assigned properties.color
 * 2. User manual overrides in entityRegistry.json
 * 3. Unclaimed / neutral territory filter
 * 4. Exact modern country baseline / ISO matches
 * 5. Historical dynasty and succession rules
 * 6. Deterministic golden-ratio perceptual fallback
 */
export function getCountryColor(
  name?: string | null,
  properties: Record<string, any> = {}
): string {
  // If the territory is unclaimed, unknown, or neutral wilderness, always return NEUTRAL_TERRITORY_COLOR
  if (properties.is_unclaimed || isNeutralOrUnclaimed(name)) {
    return NEUTRAL_TERRITORY_COLOR
  }

  // If the feature already has an explicit color assigned (e.g. from DB/API)
  if (properties.color && typeof properties.color === "string") {
    return properties.color
  }

  const meta = resolveEntityMetadata(name, properties)
  return meta.color
}

/**
 * Retrieves full entity metadata (canonical lineage, culture group, color, unclaimed status)
 */
export function getEntityMetadata(
  name?: string | null,
  properties: Record<string, any> = {}
): EntityMetadata {
  return resolveEntityMetadata(name, properties)
}
