import { GeojsonDataset } from "../graphql"

export interface GeoJSON {
  type: string
  name: string
  features: Feature[]
  bbox: number[][]
}

export interface Feature {
  type: FeatureType
  properties: Properties
  bbox: {
    type: GeometryType
    coordinates: number[][][]
  }
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

type Properties = {
  name: string | null
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
