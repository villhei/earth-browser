import { Era } from "../types"

export interface EraEpoch {
  id: string
  name: string
  dateRangeLabel: string
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
    dateRangeLabel: "123k – 5000 BCE",
    minYearStart: -Infinity,
    maxYearStart: -5000,
  },
  {
    id: "bronze-age",
    name: "Bronze Age",
    dateRangeLabel: "4000 – 1500 BCE",
    minYearStart: -4999,
    maxYearStart: -1500,
  },
  {
    id: "classical-antiquity",
    name: "Iron Age & Antiquity",
    dateRangeLabel: "1000 BCE – 500 CE",
    minYearStart: -1499,
    maxYearStart: 500,
  },
  {
    id: "middle-ages",
    name: "Middle Ages",
    dateRangeLabel: "600 – 1400 CE",
    minYearStart: 501,
    maxYearStart: 1400,
  },
  {
    id: "early-modern",
    name: "Early Modern Era",
    dateRangeLabel: "1492 – 1783 CE",
    minYearStart: 1401,
    maxYearStart: 1783,
  },
  {
    id: "industrial-age",
    name: "19th Century & Industrial",
    dateRangeLabel: "1800 – 1900 CE",
    minYearStart: 1784,
    maxYearStart: 1900,
  },
  {
    id: "modern-era",
    name: "Modern & Contemporary",
    dateRangeLabel: "1914 – 2010 CE",
    minYearStart: 1901,
    maxYearStart: Infinity,
  },
] as const

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
