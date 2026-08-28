import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import alpha from "color-alpha"
import { PuffLoader } from "react-spinners"
import { HistoricalGlobeProps, GlobeTexture } from "./types"
import { getGlobeTextureUrl } from "./textures"
import { getCountryColor, HIGHLIGHT_COLOR } from "./colors"
import { GeoJSONFeature } from "../../types"

const DEFAULT_ALTITUDE = 0.006
const DEFAULT_OPACITY = 0.55
const DEFAULT_SIDE_COLOR = "#ffffff"
const DEFAULT_STROKE_COLOR = "#000000"

export const HistoricalGlobe: React.FC<HistoricalGlobeProps> = ({
  data,
  isLoading = false,
  texture = GlobeTexture.EARTH_BLUE_MARBLE,
  layerAltitude = DEFAULT_ALTITUDE,
  opacity = DEFAULT_OPACITY,
  sideColor = DEFAULT_SIDE_COLOR,
  strokeColor = DEFAULT_STROKE_COLOR,
  selectedFeatureId = null,
  onFeatureClick,
  onFeatureHover,
  style,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<ThreeGlobe | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<GeoJSONFeature | null>(null)

  // Callbacks refs to avoid re-attaching listeners
  const onFeatureClickRef = useRef(onFeatureClick)
  const onFeatureHoverRef = useRef(onFeatureHover)
  useEffect(() => {
    onFeatureClickRef.current = onFeatureClick
    onFeatureHoverRef.current = onFeatureHover
  }, [onFeatureClick, onFeatureHover])

  // 1. Initialize Three.js Engine ONCE on mount
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const { width, height } = container.getBoundingClientRect()
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width || window.innerWidth, height || window.innerHeight)
    canvas.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const globe = new ThreeGlobe()
    globeRef.current = globe
    globe.globeImageUrl(getGlobeTextureUrl(texture))

    // Scene & Lights
    const scene = new THREE.Scene()
    scene.add(globe)
    scene.add(new THREE.AmbientLight(0xffffff, 0.75))
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85)
    dirLight.position.set(200, 100, 200)
    scene.add(dirLight)

    // Camera & Controls
    const camera = new THREE.PerspectiveCamera(
      45,
      (width || window.innerWidth) / (height || window.innerHeight),
      0.1,
      2000
    )
    camera.position.z = 320
    camera.position.y = 80
    cameraRef.current = camera

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.6
    controls.minDistance = 140
    controls.maxDistance = 700

    let animationFrameId: number
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Raycaster for pointer interactions
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const getIntersectedFeature = (e: MouseEvent): GeoJSONFeature | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(globe.children, true)
      for (const hit of intersects) {
        let current: any = hit.object
        while (current && !current.__data && current.parent && current !== globe) {
          current = current.parent
        }
        if (current && current.__data && current.__data.geometry) {
          return current.__data as GeoJSONFeature
        }
      }
      return null
    }

    let isDragging = false
    let pointerDownPos = { x: 0, y: 0 }

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = false
      pointerDownPos = { x: e.clientX, y: e.clientY }
    }

    const handlePointerMove = (e: MouseEvent) => {
      const dx = Math.abs(e.clientX - pointerDownPos.x)
      const dy = Math.abs(e.clientY - pointerDownPos.y)
      if (dx > 4 || dy > 4) {
        isDragging = true
      }

      if (!isDragging) {
        const feat = getIntersectedFeature(e)
        setHoveredFeature(feat)
        if (onFeatureHoverRef.current) onFeatureHoverRef.current(feat)
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (!isDragging) {
        const feat = getIntersectedFeature(e)
        if (onFeatureClickRef.current) onFeatureClickRef.current(feat)
      }
    }

    const domElement = renderer.domElement
    domElement.addEventListener("mousedown", handlePointerDown)
    domElement.addEventListener("mousemove", handlePointerMove)
    domElement.addEventListener("click", handleClick)

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return
      const rect = container.getBoundingClientRect()
      const w = rect.width || window.innerWidth
      const h = rect.height || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    window.addEventListener("resize", handleResize)

    return () => {
      domElement.removeEventListener("mousedown", handlePointerDown)
      domElement.removeEventListener("mousemove", handlePointerMove)
      domElement.removeEventListener("click", handleClick)
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      controls.dispose()
      renderer.dispose()
      if (canvas && renderer.domElement && canvas.contains(renderer.domElement)) {
        canvas.removeChild(renderer.domElement)
      }
      globeRef.current = null
      rendererRef.current = null
      cameraRef.current = null
    }
  }, []) // Mount once

  // 2. Texture update (zero WebGL context teardown!)
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.globeImageUrl(getGlobeTextureUrl(texture))
    }
  }, [texture])

  // 3. Layer Altitude update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonAltitude(layerAltitude)
    }
  }, [layerAltitude])

  // 4. Side Color update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonSideColor(() => alpha(sideColor, 0.4))
    }
  }, [sideColor])

  // 5. Stroke Color update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonStrokeColor(() => strokeColor)
    }
  }, [strokeColor])

  // 6. Polygon cap colors & hover/select highlighting
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current

    globe.polygonCapColor((d: any) => {
      const feat = d as GeoJSONFeature
      const name = feat.properties?.name || ""
      const isSelected =
        selectedFeatureId &&
        (feat.id === selectedFeatureId || name === selectedFeatureId)
      const isHovered =
        hoveredFeature &&
        (feat.id === hoveredFeature.id || (name && name === hoveredFeature.properties?.name))

      if (isSelected) {
        return alpha(HIGHLIGHT_COLOR, 0.85)
      }
      if (isHovered) {
        return alpha(HIGHLIGHT_COLOR, 0.7)
      }
      return alpha(getCountryColor(name), opacity)
    })
  }, [opacity, selectedFeatureId, hoveredFeature])

  // 7. Polygons & Labels Data Synchronization
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current
    const features = data?.features || []

    // Build label points accurately from PostGIS precomputed surface points
    const labels = features
      .filter((f) => f.properties?.name && f.properties?.labelLng != null && f.properties?.labelLat != null)
      .map((f) => ({
        lat: f.properties.labelLat!,
        lng: f.properties.labelLng!,
        name: f.properties.name!,
        id: f.id,
        size: 0.9,
      }))

    globe.polygonsData(features)

    globe
      .labelsData(labels)
      .labelText((d: any) => d.name)
      .labelSize("size")
      .labelDotRadius(() => 0.25)
      .labelColor(() => "rgba(255, 255, 255, 0.95)")
      .labelAltitude(() => layerAltitude + 0.005)
  }, [data, layerAltitude])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#050811",
        ...style,
      }}
    >
      <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(5, 8, 17, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 10,
            gap: "16px",
            color: "#e2e8f0",
          }}
        >
          <PuffLoader color="#38bdf8" size={70} />
          <span style={{ fontSize: "14px", letterSpacing: "0.05em" }}>
            Loading Historical Boundaries...
          </span>
        </div>
      )}

      {hoveredFeature && hoveredFeature.properties?.name && (
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "8px 18px",
            borderRadius: "20px",
            color: "#f8fafc",
            fontSize: "14px",
            fontWeight: 500,
            pointerEvents: "none",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            zIndex: 5,
          }}
        >
          {hoveredFeature.properties.name}
          {hoveredFeature.properties.formal_name &&
            hoveredFeature.properties.formal_name !== hoveredFeature.properties.name && (
              <span style={{ opacity: 0.7, marginLeft: "8px", fontSize: "12px" }}>
                ({hoveredFeature.properties.formal_name})
              </span>
            )}
        </div>
      )}
    </div>
  )
}

export default HistoricalGlobe
