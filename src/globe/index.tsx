import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import TrackballControls from "three-trackballcontrols"
import COUNTRY_COLORS_LIST, { Country } from "country-flag-colors"
import α from "color-alpha"
import globeTexture from "url:./assets/earth-blue-marble.jpg"
import { Feature } from "../worldmap/geojson"
import { Config } from "../controls"
import { worldMap } from "../worldmap"

const COLORS_BY_COUNTRY_NAME = new Map<string, Array<string>>(
  COUNTRY_COLORS_LIST.map((countrySpec: Country) => [
    countrySpec.name,
    countrySpec.colors,
  ])
)

function findCountryColor(name: string): string | undefined {
  const colors = COLORS_BY_COUNTRY_NAME.get(name)
  if (colors) {
    return α(colors[0], 0.4)
  }
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

type Props = {
  config: Config
}

const GlobeComponent = (props: Props) => {
  const {
    config: { countries, layerAltitude },
  } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<ThreeGlobe>(new ThreeGlobe())

  useEffect(() => {
    if (!containerRef.current || !globeRef.current) {
      return
    }
    const container = containerRef.current
    const globe = globeRef.current

    const { width, height } = container.getBoundingClientRect()
    // Setup renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    globe
      .globeImageUrl(globeTexture)
      .polygonsData(countries.features)
      .polygonAltitude(layerAltitude)
      .polygonCapColor((d: object) => {
        const feature = d as Feature
        return findColor(feature) || "rgba(0, 0, 0, 0.0)"
      })
      .polygonSideColor(() => "#fff")
      .polygonStrokeColor(() => "#fff")

    // Setup scene
    const scene = new THREE.Scene()
    scene.add(globe)
    scene.add(new THREE.AmbientLight(0xbbbbbb))
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6))

    // Setup camera
    const camera = new THREE.PerspectiveCamera()
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    camera.position.z = 500

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderer.domElement)
    tbControls.noPan = true
    tbControls.staticMoving = true
    tbControls.minDistance = 101
    tbControls.rotateSpeed = 3
    tbControls.zoomSpeed = 0.8

    // Kick-off renderer

    let currentFrame = requestAnimationFrame(animate)
    function animate() {
      tbControls.update()
      renderer.render(scene, camera)
      currentFrame = requestAnimationFrame(animate)
    }

    const onResize = () => {
      const { width, height } = container.getBoundingClientRect()

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      cancelAnimationFrame(currentFrame)
    }
  }, [containerRef.current])

  useEffect(() => {
    if (!globeRef.current) {
      return
    }

    const globe = globeRef.current
    globe.polygonAltitude(layerAltitude)
  }, [globeRef.current, layerAltitude])

  return <div style={{ flex: 1 }} ref={containerRef}></div>
}

export default GlobeComponent