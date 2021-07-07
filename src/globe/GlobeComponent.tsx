import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import TrackballControls from "three-trackballcontrols"
import alpha from "color-alpha"
import {
  Feature,
  CountryDataset,
  getCountryNameKeys,
  GeoJSON,
} from "../worldmap"
import { Config } from "../controls"
import { getTexturePath } from "../earthTextures"
import { findCountryColor, DEFAULT_COLOR } from "../countryColors"

type Props = {
  config: Config
  dataset: GeoJSON
}

export function findColor(country: Feature): string {
  const [color] = getCountryNameKeys()
    .map((key): string => country.properties[key] as any)
    .map(findCountryColor)
    .filter(Boolean)
  return color || DEFAULT_COLOR
}

const GlobeComponent = (props: Props) => {
  const {
    config: { layerAltitude, texture, strokeColor, sideColor, opacity },
    dataset,
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

    globe.globeImageUrl(getTexturePath(texture))

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
  }, [globeRef, sideColor])

  useEffect(() => {
    const globe = globeRef.current

    globe.polygonStrokeColor(() => strokeColor)
  }, [globeRef, strokeColor])

  useEffect(() => {
    const globe = globeRef.current

    globe.polygonCapColor((d: object) => {
      const feature = d as Feature
      return alpha(findColor(feature), opacity)
    })
  }, [globeRef, dataset, opacity])

  useEffect(() => {
    const globe = globeRef.current
    const polygons = JSON.parse(JSON.stringify(dataset.features))
    globe.polygonsData(polygons)
  }, [globeRef, dataset])

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
