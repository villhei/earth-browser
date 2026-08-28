declare module "country-flag-colors" {
  export type Country = {
    name: string
    colors: Array<string>
  }
  const CountryList: Array<Country>
  export default CountryList
}

declare module "color-alpha" {
  export default function alpha(color: string, opacity: number): string
}

declare module "*.css" {
  const content: string
  export default content
}

declare module "*.jpg" {
  const content: string
  export default content
}

declare module "*.png" {
  const content: string
  export default content
}

declare module "*.geojson" {
  const content: string
  export default content
}

