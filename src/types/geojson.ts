export interface GeoJSON {
  type: string
  features: Feature[]
  bbox: number[]
}

export interface Feature {
  type: FeatureType
  properties: Properties
  bbox: number[]
  geometry: Geometry
}

export interface Geometry {
  type: GeometryType
  coordinates: Array<Array<Array<number[] | number>>>
}

export enum GeometryType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export interface Properties {
  scalerank: number
  featurecla: Featurecla
  LABELRANK: number
  SOVEREIGNT: string
  SOV_A3: string
  ADM0_DIF: number
  LEVEL: number
  TYPE: Type
  ADMIN: string
  ADM0_A3: string
  GEOU_DIF: number
  GEOUNIT: string
  GU_A3: string
  SU_DIF: number
  SUBUNIT: string
  SU_A3: string
  BRK_DIFF: number
  NAME: string
  NAME_LONG: string
  BRK_A3: string
  BRK_NAME: string
  BRK_GROUP: null
  ABBREV: string
  POSTAL: string
  FORMAL_EN: null | string
  FORMAL_FR: null | string
  NAME_CIAWF: null | string
  NOTE_ADM0: null | string
  NOTE_BRK: null | string
  NAME_SORT: string
  NAME_ALT: null | string
  MAPCOLOR7: number
  MAPCOLOR8: number
  MAPCOLOR9: number
  MAPCOLOR13: number
  POP_EST: number
  POP_RANK: number
  GDP_MD_EST: number
  POP_YEAR: number
  LASTCENSUS: number
  GDP_YEAR: number
  ECONOMY: Economy
  INCOME_GRP: IncomeGrp
  WIKIPEDIA: number
  FIPS_10_: string
  ISO_A2: string
  ISO_A3: string
  ISO_A3_EH: string
  ISO_N3: string
  UN_A3: string
  WB_A2: string
  WB_A3: string
  WOE_ID: number
  WOE_ID_EH: number
  WOE_NOTE: string
  ADM0_A3_IS: string
  ADM0_A3_US: string
  ADM0_A3_UN: number
  ADM0_A3_WB: number
  CONTINENT: Continent
  REGION_UN: Continent
  SUBREGION: string
  REGION_WB: RegionWb
  NAME_LEN: number
  LONG_LEN: number
  ABBREV_LEN: number
  TINY: number
  HOMEPART: number
  MIN_ZOOM: number
  MIN_LABEL: number
  MAX_LABEL: number
}

export enum Continent {
  Africa = "Africa",
  Americas = "Americas",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SevenSeasOpenOcean = "Seven seas (open ocean)",
  SouthAmerica = "South America",
}

export enum Economy {
  The1DevelopedRegionG7 = "1. Developed region: G7",
  The2DevelopedRegionNonG7 = "2. Developed region: nonG7",
  The3EmergingRegionBRIC = "3. Emerging region: BRIC",
  The4EmergingRegionMIKT = "4. Emerging region: MIKT",
  The5EmergingRegionG20 = "5. Emerging region: G20",
  The6DevelopingRegion = "6. Developing region",
  The7LeastDevelopedRegion = "7. Least developed region",
}

export enum IncomeGrp {
  The1HighIncomeOECD = "1. High income: OECD",
  The2HighIncomeNonOECD = "2. High income: nonOECD",
  The3UpperMiddleIncome = "3. Upper middle income",
  The4LowerMiddleIncome = "4. Lower middle income",
  The5LowIncome = "5. Low income",
}

export enum RegionWb {
  Antarctica = "Antarctica",
  EastAsiaPacific = "East Asia & Pacific",
  EuropeCentralAsia = "Europe & Central Asia",
  LatinAmericaCaribbean = "Latin America & Caribbean",
  MiddleEastNorthAfrica = "Middle East & North Africa",
  NorthAmerica = "North America",
  SouthAsia = "South Asia",
  SubSaharanAfrica = "Sub-Saharan Africa",
}

export enum Type {
  Country = "Country",
  Dependency = "Dependency",
  Disputed = "Disputed",
  Indeterminate = "Indeterminate",
  SovereignCountry = "Sovereign country",
}

export enum Featurecla {
  Admin0Country = "Admin-0 country",
}

export enum FeatureType {
  Feature = "Feature",
}
