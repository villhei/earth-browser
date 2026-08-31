import {
  resolveEntityMetadata,
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
  EntityMetadata,
} from "./historicalLineage"

export {
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
  getDeterministicPastelColor,
  getDeterministicVividColor,
  type EntityMetadata,
} from "./historicalLineage"

export const DEFAULT_COUNTRY_COLOR = "#3b82f6"
export const HIGHLIGHT_COLOR = "#f59e0b"

/**
 * Returns the resolved hex/HSL color for any historical feature or country name.
 * When PARTOF is provided and refers to a parent realm/cultural area, the parent color is used for rendering.
 */
export function getCountryColor(
  name?: string | null,
  properties: Record<string, any> = {}
): string {
  // If the territory is unclaimed, unknown, or neutral wilderness, always return NEUTRAL_TERRITORY_COLOR
  if (properties.is_unclaimed || isNeutralOrUnclaimed(name)) {
    return NEUTRAL_TERRITORY_COLOR
  }

  // 1. Check PARTOF parent color inheritance
  const partOf = (properties.PARTOF || properties.part_of || "").trim()
  if (partOf && !isNeutralOrUnclaimed(partOf)) {
    const parentMeta = resolveEntityMetadata(partOf, {
      ...properties,
      name: partOf,
      PARTOF: undefined,
      part_of: undefined,
      color: undefined,
    })
    if (parentMeta.color && !parentMeta.isUnclaimed) {
      return parentMeta.color
    }
  }

  const meta = resolveEntityMetadata(name, properties)
  return meta.color
}

/**
 * Returns the local entity's own intrinsic cultural color (ignoring PARTOF parent override).
 */
export function getLocalCountryColor(
  name?: string | null,
  properties: Record<string, any> = {}
): string {
  if (properties.is_unclaimed || isNeutralOrUnclaimed(name)) {
    return NEUTRAL_TERRITORY_COLOR
  }
  const cleanProps = {
    ...properties,
    PARTOF: undefined,
    part_of: undefined,
    color: undefined,
  }
  const meta = resolveEntityMetadata(name, cleanProps)
  return meta.color
}

/**
 * Checks if a feature represents a subjugated territory based on SUBJECTO.
 * Returns true if SUBJECTO exists, is non-empty, and represents an external power.
 */
export function isSubjugatedEntity(
  name?: string | null,
  properties: Record<string, any> = {}
): boolean {
  if (properties.is_unclaimed || isNeutralOrUnclaimed(name)) {
    return false
  }

  const subjectTo = (
    properties.SUBJECTO ||
    properties.subject_to ||
    properties.SUBCTO ||
    ""
  ).trim()
  if (!subjectTo || isNeutralOrUnclaimed(subjectTo)) {
    return false
  }

  const cleanName = (name || properties.name || properties.NAME || "")
    .trim()
    .toLowerCase()
  const cleanSubject = subjectTo.toLowerCase()

  // If SUBJECTO matches the entity itself, it is autonomous (not subjugated by external power)
  if (
    cleanName === cleanSubject ||
    cleanName.includes(cleanSubject) ||
    cleanSubject.includes(cleanName)
  ) {
    return false
  }

  return true
}

export interface SubjugationInfo {
  isSubjugated: boolean
  culturalColor: string
  parentColor: string
  suzerainColor: string
  suzerainName: string | null
  parentName: string | null
}

/**
 * Retrieves full subjugation styling and parent color relationship for a feature.
 */
export function getSubjugationInfo(
  name?: string | null,
  properties: Record<string, any> = {}
): SubjugationInfo {
  const isSubjugated = isSubjugatedEntity(name, properties)
  const partOf = (properties.PARTOF || properties.part_of || "").trim() || null
  const subjectTo =
    (properties.SUBJECTO || properties.subject_to || properties.SUBCTO || "").trim() ||
    null

  const culturalColor = getLocalCountryColor(name, properties)
  const parentColor = partOf
    ? getCountryColor(partOf, { name: partOf })
    : culturalColor
  const suzerainColor = subjectTo
    ? getCountryColor(subjectTo, { name: subjectTo })
    : parentColor

  return {
    isSubjugated,
    culturalColor,
    parentColor,
    suzerainColor,
    suzerainName: subjectTo,
    parentName: partOf,
  }
}

/**
 * Returns the border precision level: 3 (high/sharp), 2 (medium/blur), 1 (low/high blur).
 * Defaults to 1 for uncertain / undefined historical boundaries.
 */
export function getBorderPrecision(
  properties: Record<string, any> = {}
): 1 | 2 | 3 {
  const val =
    properties.BORDERPRECISION ??
    properties.border_precision ??
    properties.BORDERI ??
    null
  if (val === 3 || val === "3" || Number(val) === 3) return 3
  if (val === 2 || val === "2" || Number(val) === 2) return 2
  return 1
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

