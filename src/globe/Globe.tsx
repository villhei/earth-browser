import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import TrackballControls from "three-trackballcontrols"
import COUNTRY_COLORS_LIST, { Country } from "country-flag-colors"
import alpha from "color-alpha"
import { Feature } from "../worldmap/geojson"
import { Config } from "../controls"
import { getTexturePath } from "../earthTextures"

const COLORS_BY_COUNTRY_NAME = new Map<string, Array<string>>(
  COUNTRY_COLORS_LIST.map((countrySpec: Country) => [
    countrySpec.name,
    countrySpec.colors,
  ])
)

function findCountryColor(name: string): string | undefined {
  const colors = COLORS_BY_COUNTRY_NAME.get(name)
  if (colors) {
    return alpha(colors[0], 0.4)
  }
  return undefined
}

function findColor(country: Feature): string | undefined {
  const { NAME_LONG, SOVEREIGNT } = country.properties
  const color = findCountryColor(NAME_LONG) || findCountryColor(SOVEREIGNT)
  if (!color) {
    return undefined
  }
  return color
}

type Props = {
  config: Config
}

const GlobeComponent = (props: Props) => {
  const {
    config: { countries, layerAltitude, texture, strokeColor, sideColor },
  } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  const globeRef = useRef<ThreeGlobe>(new ThreeGlobe())

  useEffect(() => {
    const container = containerRef.current!
    const canvas = canvasRef.current!
    const globe = globeRef.current

    const { width, height } = container.getBoundingClientRect()
    // Setup renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    canvas.appendChild(renderer.domElement)

    globe
      .globeImageUrl(getTexturePath(texture))
      .polygonsData(countries.features)
      .polygonAltitude(layerAltitude)
      .polygonCapColor((d: object) => {
        const feature = d as Feature
        return findColor(feature) || "rgba(0, 0, 0, 0.0)"
      })
      .polygonSideColor(() => sideColor)
      .polygonStrokeColor(() => strokeColor)

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
      renderer.setSize(0, 0)
      const { width, height } = container.getBoundingClientRect()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", onResize)

    return () => {
      if (!containerRef.current) {
        return
      }
      canvas.removeChild(renderer.domElement)
      renderer.dispose()
      cancelAnimationFrame(currentFrame)
      window.removeEventListener("resize", onResize)
    }
  }, [containerRef, texture])

  useEffect(() => {
    const globe = globeRef.current
    globe.polygonAltitude(layerAltitude)
  }, [globeRef.current, layerAltitude])

  useEffect(() => {
    const globe = globeRef.current

    globe.polygonSideColor(() => alpha(sideColor, 0.4))
    console.log("sideColor")
  }, [globeRef, sideColor])

  useEffect(() => {
    const globe = globeRef.current

    globe.polygonStrokeColor(() => strokeColor)
    console.log("strokeColor")
  }, [globeRef, strokeColor])

  return (
    <div
      style={{
        flex: 1,
        overflow: "hidden",
        position: "relative",
      }}
      ref={containerRef}
    >
      <div ref={canvasRef} />
    </div>
  )
}

export default GlobeComponent
