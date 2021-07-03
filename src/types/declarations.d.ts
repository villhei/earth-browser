declare module "three-trackballcontrols" {
  import * as THREE from "three"

  type Screen = { left: number; top: number; width: number; height: number }

  class TrackballControls {
    constructor(object: THREE.Camera, domElement: HTMLElement) {}

    enabled: boolean

    screen: Screen
    rotateSpeed: number
    zoomSpeed: number
    panSpeed: number
    noRotate: boolean
    noZoom: boolean
    noPan: boolean
    staticMoving: boolean
    dynamicDampingFactor: number
    minDistance: number
    maxDistance: number
    update(): void
  }
  export default TrackballControls
}

declare module "country-flag-colors" {
  export type Country = {
    name: string
    colors: Array<string>
  }
  const CountryList: Array<Country>
  export default CountryList
}

declare module "*.css" {
  const content: string
  export default content
}

declare module "*.jpg" {
  const content: string
  export default content
}
