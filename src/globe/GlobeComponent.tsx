import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import OrbitControls from "three-orbitcontrols"
import alpha from "color-alpha"
import { Feature, GeoJSON } from "../datasets"
import { Config } from "../controls"
import { getTexturePath } from "../earthTextures"
import { findCountryColor, DEFAULT_COLOR } from "../countryColors"

type Props = {
  config: Config
  dataset: GeoJSON
}

export function findColor(country: Feature): string {
  if (!country.properties.name) {
    return DEFAULT_COLOR
  }
  const color = findCountryColor(country.properties.name!)
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
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    // Kick-off renderer

    let currentFrame = requestAnimationFrame(animate)
    function animate() {
      orbitControls.update()
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
  }, [globeRef, opacity])

  useEffect(() => {
    const globe = globeRef.current
    const polygons: Feature[] = JSON.parse(JSON.stringify(dataset.features))
    const labelPositions = polygons.map(({ bbox, properties }) => {
      let lngs = 0,
        lats = 0
      for (const [lng, lat] of bbox.coordinates[0]) {
        lngs += lng
        lats += lat
      }

      const count = bbox.coordinates[0].length
      return {
        lng: lngs / count,
        lat: lats / count,
        size: 1,
        color: "white",
        name: properties.name || "Unknown",
      }
    })
    globe.polygonsData(polygons)

    globe
      .labelsData(labelPositions)
      .labelText((d: any) => {
        console.log(d)
        return d.name
      })
      .labelSize("size")
      .labelDotRadius((d: any) => 0.2)
      .labelColor("color")

    return () => {
      globe.polygonsData([])
      globe.labelsData()
    }
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
