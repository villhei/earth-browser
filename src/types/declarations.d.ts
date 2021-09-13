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

declare module "*.geojson" {
  const content: string
  export default content
}

declare module "three-orbitcontrols" {
  import * as THREE from "three"

  type Screen = { left: number; top: number; width: number; height: number }

  class OrbitControls {
    constructor(object: THREE.Camera, domElement: HTMLElement) {}

    autoRotate: boolean
    autoRotateSpeed: number
    dampingFactor: number
    domElement: HTMLElement
    enabled: boolean
    enableRotate: boolean
    enableZoom: boolean
    keyPanSpeed: number
    keys: {
      LEFT: "ArrowLeft" | string
      UP: "ArrowUp" | string
      RIGHT: "ArrowRight" | string
      BOTTOM: "ArrowDown" | string
    }
    maxAzimuthAngle: number
    maxDistance: number
    maxPolarAngle: number
    maxZoom: number
    minAzimuthAngle: number
    minDistance: number
    minPolarAngle: number
    minZoom: number
    mouseButtons: {
      LEFT: THREE.MOUSE
      MIDDLE: THREE.MOUSE
      RIGHT: THREE.MOUSE
    }
    object: THREE.Camera
    panSpeed: number
    position0: THREE.Vector3
    rotateSpeed: number
    screenSpacePlanning: boolean
    target0: THREE.Vector3
    target: THREE.Vector3
    touches: {
      ONE: THREE.TOUCH
      TWO: THREE.TOUCH
    }
    zoom0: number
    zoomSpeed: number
    dispose(): void
    getAzimuthAngle: number
    getPolarAngle: number
    getDistabcne: number
    listenToKeyEvents(domElement: HTMLElement): void
    reset(): null
    saveState(): null
    update(): boolean
  }
  export default TrackballControls
}
