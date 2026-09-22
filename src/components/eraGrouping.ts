import { Era } from "../types"
import { Language } from "../i18n/types"

export interface EraEpoch {
  id: string
  name: string
  name_fi?: string
  dateRangeLabel: string
  dateRangeLabel_fi?: string
  minYearStart: number
  maxYearStart: number
}

/**
 * Standard historical epochs for grouping historical atlas eras.
 * Partitions history into 7 recognizable, chronological periods.
 */
export const ERA_EPOCHS: readonly EraEpoch[] = [
  {
    id: "prehistory",
    name: "Prehistory & Holocene",
    name_fi: "Esihistoria ja holoseeni",
    dateRangeLabel: "123k – 5000 BCE",
    dateRangeLabel_fi: "123k – 5000 eaa.",
    minYearStart: -Infinity,
    maxYearStart: -5000,
  },
  {
    id: "bronze-age",
    name: "Bronze Age",
    name_fi: "Pronssikausi",
    dateRangeLabel: "4000 – 1500 BCE",
    dateRangeLabel_fi: "4000 – 1500 eaa.",
    minYearStart: -4999,
    maxYearStart: -1500,
  },
  {
    id: "classical-antiquity",
    name: "Iron Age & Antiquity",
    name_fi: "Rautakausi ja antiikki",
    dateRangeLabel: "1000 BCE – 500 CE",
    dateRangeLabel_fi: "1000 eaa. – 500 jaa.",
    minYearStart: -1499,
    maxYearStart: 500,
  },
  {
    id: "middle-ages",
    name: "Middle Ages",
    name_fi: "Keskiaika",
    dateRangeLabel: "600 – 1400 CE",
    dateRangeLabel_fi: "600 – 1400 jaa.",
    minYearStart: 501,
    maxYearStart: 1400,
  },
  {
    id: "early-modern",
    name: "Early Modern Era",
    name_fi: "Varhaismoderni aika",
    dateRangeLabel: "1492 – 1783 CE",
    dateRangeLabel_fi: "1492 – 1783 jaa.",
    minYearStart: 1401,
    maxYearStart: 1783,
  },
  {
    id: "industrial-age",
    name: "19th Century & Industrial",
    name_fi: "1800-luku ja teollistuminen",
    dateRangeLabel: "1800 – 1900 CE",
    dateRangeLabel_fi: "1800 – 1900 jaa.",
    minYearStart: 1784,
    maxYearStart: 1900,
  },
  {
    id: "modern-era",
    name: "Modern & Contemporary",
    name_fi: "Nykyaika",
    dateRangeLabel: "1914 – 2010 CE",
    dateRangeLabel_fi: "1914 – 2010 jaa.",
    minYearStart: 1901,
    maxYearStart: Infinity,
  },
] as const

/**
 * Returns localized epoch name and date range label.
 */
export function getLocalizedEpoch(epoch: EraEpoch, language: Language = "en"): EraEpoch {
  if (language === "fi") {
    return {
      ...epoch,
      name: epoch.name_fi || epoch.name,
      dateRangeLabel: epoch.dateRangeLabel_fi || epoch.dateRangeLabel,
    }
  }
  return epoch
}

export interface EraGroup {
  epoch: EraEpoch
  eras: Era[]
}

/**
 * Finds the epoch definition matching a given era based on its year_start.
 */
export function getEpochForEra(era: Pick<Era, "year_start">): EraEpoch {
  const found = ERA_EPOCHS.find(
    (e) => era.year_start >= e.minYearStart && era.year_start <= e.maxYearStart
  )
  return found || ERA_EPOCHS[ERA_EPOCHS.length - 1]
}

/**
 * Groups an array of eras into epoch sections, preserving era ordering within each epoch.
 */
export function groupErasByEpoch(eras: Era[]): EraGroup[] {
  const groupMap = new Map<string, EraGroup>()

  for (const epoch of ERA_EPOCHS) {
    groupMap.set(epoch.id, {
      epoch,
      eras: [],
    })
  }

  for (const era of eras) {
    const epoch = getEpochForEra(era)
    const group = groupMap.get(epoch.id)
    if (group) {
      group.eras.push(era)
    }
  }

  // Return only groups that have at least one era, in chronological epoch order
  return ERA_EPOCHS.map((epoch) => groupMap.get(epoch.id)!).filter(
    (group) => group && group.eras.length > 0
  )
}
