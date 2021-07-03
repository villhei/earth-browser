import * as THREE from "three"
import ThreeGlobe from "three-globe"
import TrackballControls from "three-trackballcontrols"
import COUNTRY_COLORS_LIST, { Country } from "country-flag-colors"
import α from "color-alpha"
import worldGeoJSON from "./assets/countries.json"
import globeTexture from "url:./assets/earth-blue-marble.jpg"
import { GeoJSON, Feature } from "./types/geojson"

const COLORS_BY_COUNTRY_NAME = new Map<string, Array<string>>(
  COUNTRY_COLORS_LIST.map((countrySpec: Country) => [
    countrySpec.name,
    countrySpec.colors,
  ])
)

const worldMap = worldGeoJSON as GeoJSON

function findCountryColor(name: string): string | undefined {
  const colors = COLORS_BY_COUNTRY_NAME.get(name)
  if (colors) {
    return α(colors[0], 0.4)
  }
  console.log("Not found", name)
  return undefined
}

function findColor(country: Feature): string | undefined {
  const { NAME_LONG, SOVEREIGNT } = country.properties
  const color = findCountryColor(NAME_LONG) || findCountryColor(SOVEREIGNT)
  if (!color) {
    console.log("not found", country.properties)
    return undefined
  }
  return color
}

const Globe = new ThreeGlobe()
  .globeImageUrl(globeTexture)
  .polygonsData(
    worldMap.features.filter((d: Feature) => d.properties.ISO_A2 !== "AQ")
  )
  .polygonAltitude(0.01)
  .polygonCapColor((d: object) => {
    const feature = d as Feature
    return findColor(feature) || "rgba(0, 0, 0, 0.0)"
  })
  .polygonSideColor(() => "#fff")
  .polygonStrokeColor(() => "#fff")

// Setup renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById("app")!.appendChild(renderer.domElement)

// Setup scene
const scene = new THREE.Scene()
scene.add(Globe)
scene.add(new THREE.AmbientLight(0xbbbbbb))
scene.add(new THREE.DirectionalLight(0xffffff, 0.6))

// Setup camera
const camera = new THREE.PerspectiveCamera()
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()
camera.position.z = 500

// Add camera controls
const tbControls = new TrackballControls(camera, renderer.domElement)
tbControls.minDistance = 101
tbControls.rotateSpeed = 3
tbControls.zoomSpeed = 0.8

// Kick-off renderer
setTimeout(function animate() {
  // IIFE
  // Frame cycle
  tbControls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}, 0)
