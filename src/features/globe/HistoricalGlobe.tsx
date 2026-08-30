import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import ThreeGlobe from "three-globe"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import alpha from "color-alpha"
import { PuffLoader } from "react-spinners"
import { HistoricalGlobeProps, GlobeTexture } from "./types"
import { getGlobeTextureUrl } from "./textures"
import {
  getCountryColor,
  HIGHLIGHT_COLOR,
  isNeutralOrUnclaimed,
  NEUTRAL_TERRITORY_COLOR,
} from "./colors"
import {
  PlacedLabel,
  computePlacedLabels,
  renderLabelsToCanvas,
} from "./labels"
import { GeoJSONFeature } from "../../types"

const DEFAULT_ALTITUDE = 0.005
const DEFAULT_OPACITY = 0.55
const DEFAULT_SIDE_COLOR = "#ffffff"
const DEFAULT_STROKE_COLOR = "#000000"
const DEFAULT_CAP_CURVATURE_RESOLUTION = 3

export const HistoricalGlobe: React.FC<HistoricalGlobeProps> = ({
  data,
  isLoading = false,
  texture = GlobeTexture.EARTH_BLUE_MARBLE,
  layerAltitude = DEFAULT_ALTITUDE,
  opacity = DEFAULT_OPACITY,
  sideColor = DEFAULT_SIDE_COLOR,
  strokeColor = DEFAULT_STROKE_COLOR,
  selectedFeatureId = null,
  showLabels = true,
  polygonCapCurvatureResolution = DEFAULT_CAP_CURVATURE_RESOLUTION,
  onFeatureClick,
  onFeatureHover,
  style,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const labelsCanvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<ThreeGlobe | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const placedLabelsRef = useRef<PlacedLabel[]>([])
  const [hoveredFeature, setHoveredFeature] = useState<GeoJSONFeature | null>(
    null,
  )

  // Mutable refs to keep animation loop in sync with props without re-initializing
  const dataRef = useRef(data)
  const showLabelsRef = useRef(showLabels)
  const layerAltitudeRef = useRef(layerAltitude)
  const selectedFeatureIdRef = useRef(selectedFeatureId)
  const hoveredFeatureRef = useRef(hoveredFeature)
  const onFeatureClickRef = useRef(onFeatureClick)
  const onFeatureHoverRef = useRef(onFeatureHover)

  useEffect(() => {
    dataRef.current = data
    showLabelsRef.current = showLabels
    layerAltitudeRef.current = layerAltitude
    selectedFeatureIdRef.current = selectedFeatureId
    hoveredFeatureRef.current = hoveredFeature
    onFeatureClickRef.current = onFeatureClick
    onFeatureHoverRef.current = onFeatureHover
  }, [
    data,
    showLabels,
    layerAltitude,
    selectedFeatureId,
    hoveredFeature,
    onFeatureClick,
    onFeatureHover,
  ])

  // 1. Initialize Three.js Engine & 2D Labels Canvas ONCE on mount
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const labelsCanvas = labelsCanvasRef.current
    if (!container || !canvas || !labelsCanvas) return

    const { width, height } = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(dpr)
    renderer.setSize(width || window.innerWidth, height || window.innerHeight)
    canvas.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // 2D Labels Canvas setup
    labelsCanvas.width = (width || window.innerWidth) * dpr
    labelsCanvas.height = (height || window.innerHeight) * dpr
    const ctx2d = labelsCanvas.getContext("2d")
    if (ctx2d) {
      ctx2d.scale(dpr, dpr)
    }

    const globe = new ThreeGlobe()
    globeRef.current = globe
    globe.globeImageUrl(getGlobeTextureUrl(texture))
    globe.polygonCapCurvatureResolution(polygonCapCurvatureResolution)

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
      2000,
    )
    camera.position.z = 320
    camera.position.y = 80
    cameraRef.current = camera

    const controls = new OrbitControls(camera, container)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.6
    controls.minDistance = 140
    controls.maxDistance = 700

    let animationFrameId: number
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)

      // 2D Screen-space non-overlapping labels rendering
      if (labelsCanvasRef.current && camera) {
        const c2d = labelsCanvasRef.current
        const ctx = c2d.getContext("2d")
        if (ctx) {
          const w = container.clientWidth || window.innerWidth
          const h = container.clientHeight || window.innerHeight

          const allFeatures = dataRef.current?.features || []
          const renderableFeatures = allFeatures.filter((feat) => {
            const props = feat.properties || {}
            const name = props.name || props.NAME || ""
            return !props.is_unclaimed && !isNeutralOrUnclaimed(name)
          })

          if (showLabelsRef.current && renderableFeatures.length) {
            const placed = computePlacedLabels(
              renderableFeatures,
              camera,
              w,
              h,
              {
                layerAltitude: layerAltitudeRef.current,
                selectedFeatureId: selectedFeatureIdRef.current,
                hoveredFeatureId:
                  hoveredFeatureRef.current?.id ||
                  hoveredFeatureRef.current?.properties?.name ||
                  null,
                paddingX: 10,
                paddingY: 6,
              },
              ctx,
            )
            placedLabelsRef.current = placed
            renderLabelsToCanvas(ctx, placed, w, h, dpr)
          } else {
            placedLabelsRef.current = []
            ctx.clearRect(0, 0, w, h)
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Raycaster for 3D polygon pointer interactions
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
        while (
          current &&
          !current.__data &&
          current.parent &&
          current !== globe
        ) {
          current = current.parent
        }
        if (current && current.__data && current.__data.geometry) {
          return current.__data as GeoJSONFeature
        }
      }
      return null
    }

    const getHoveredLabel = (
      clientX: number,
      clientY: number,
    ): PlacedLabel | null => {
      const rect = container.getBoundingClientRect()
      const px = clientX - rect.left
      const py = clientY - rect.top

      for (let i = placedLabelsRef.current.length - 1; i >= 0; i--) {
        const label = placedLabelsRef.current[i]
        if (
          px >= label.box.minX &&
          px <= label.box.maxX &&
          py >= label.box.minY &&
          py <= label.box.maxY
        ) {
          return label
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
        // 1. Check direct label hit
        const hitLabel = getHoveredLabel(e.clientX, e.clientY)
        if (hitLabel) {
          container.style.cursor = "pointer"
          setHoveredFeature(hitLabel.feature)
          if (onFeatureHoverRef.current)
            onFeatureHoverRef.current(hitLabel.feature)
          return
        }

        // 2. Fall back to 3D geometry hit
        const feat = getIntersectedFeature(e)
        setHoveredFeature(feat)
        if (onFeatureHoverRef.current) onFeatureHoverRef.current(feat)
        container.style.cursor = feat ? "pointer" : "grab"
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (!isDragging) {
        // 1. Check direct label click
        const hitLabel = getHoveredLabel(e.clientX, e.clientY)
        if (hitLabel) {
          if (onFeatureClickRef.current)
            onFeatureClickRef.current(hitLabel.feature)
          return
        }

        // 2. Fall back to 3D geometry click
        const feat = getIntersectedFeature(e)
        if (onFeatureClickRef.current) onFeatureClickRef.current(feat)
      }
    }

    container.addEventListener("mousedown", handlePointerDown)
    container.addEventListener("mousemove", handlePointerMove)
    container.addEventListener("click", handleClick)

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera || !labelsCanvasRef.current) return
      const rect = container.getBoundingClientRect()
      const w = rect.width || window.innerWidth
      const h = rect.height || window.innerHeight
      const curDpr = Math.min(window.devicePixelRatio || 1, 2)

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)

      labelsCanvasRef.current.width = w * curDpr
      labelsCanvasRef.current.height = h * curDpr
      const ctx = labelsCanvasRef.current.getContext("2d")
      if (ctx) {
        ctx.scale(curDpr, curDpr)
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    window.addEventListener("resize", handleResize)

    return () => {
      container.removeEventListener("mousedown", handlePointerDown)
      container.removeEventListener("mousemove", handlePointerMove)
      container.removeEventListener("click", handleClick)
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      controls.dispose()
      renderer.dispose()
      if (
        canvas &&
        renderer.domElement &&
        canvas.contains(renderer.domElement)
      ) {
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

  // 3. Polygon Cap Curvature Resolution update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonCapCurvatureResolution(polygonCapCurvatureResolution)
    }
  }, [polygonCapCurvatureResolution])

  // 4. Layer Altitude update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonAltitude((d: any) => {
        const feat = d as GeoJSONFeature
        const props = feat.properties || {}
        const name = props.name || props.NAME || ""
        if (props.is_unclaimed || isNeutralOrUnclaimed(name)) {
          return 0.0
        }
        return layerAltitude
      })
    }
  }, [layerAltitude])

  // 4. Side Color update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonSideColor((d: any) => {
        const feat = d as GeoJSONFeature
        const props = feat.properties || {}
        const name = props.name || props.NAME || ""
        if (props.is_unclaimed || isNeutralOrUnclaimed(name)) {
          return "transparent"
        }
        return alpha(sideColor, 0.4)
      })
    }
  }, [sideColor])

  // 5. Stroke Color update
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.polygonStrokeColor((d: any) => {
        const feat = d as GeoJSONFeature
        const props = feat.properties || {}
        const name = props.name || props.NAME || ""
        if (props.is_unclaimed || isNeutralOrUnclaimed(name)) {
          return "transparent"
        }
        return strokeColor
      })
    }
  }, [strokeColor])

  // 6. Polygon cap colors & hover/select highlighting
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current

    globe.polygonCapColor((d: any) => {
      const feat = d as GeoJSONFeature
      const props = feat.properties || {}
      const name = props.name || props.NAME || ""
      const isUnclaimed = props.is_unclaimed || isNeutralOrUnclaimed(name)
      const isSelected =
        selectedFeatureId &&
        (feat.id === selectedFeatureId || name === selectedFeatureId)
      const isHovered =
        hoveredFeature &&
        (feat.id === hoveredFeature.id ||
          (name && name === hoveredFeature.properties?.name))

      if (isSelected) {
        return alpha(HIGHLIGHT_COLOR, 0.85)
      }
      if (isHovered) {
        return alpha(HIGHLIGHT_COLOR, 0.7)
      }
      if (isUnclaimed) {
        return "transparent"
      }
      return alpha(getCountryColor(name, props), opacity)
    })
  }, [opacity, selectedFeatureId, hoveredFeature])

  // 7. Polygons Data Synchronization
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current
    const allFeatures = data?.features || []

    // Filter out unclaimed background filler features so they do not produce elevated 3D meshes over oceans/wilderness
    const renderableFeatures = allFeatures.filter((feat) => {
      const props = feat.properties || {}
      const name = props.name || props.NAME || ""
      return !props.is_unclaimed && !isNeutralOrUnclaimed(name)
    })

    globe.polygonsData(renderableFeatures)
    // Clear three-globe 3D text meshes in favor of fixed-scale non-overlapping canvas labels
    globe.labelsData([])
  }, [data])

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
        cursor: "grab",
        ...style,
      }}
    >
      <div
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <canvas
        ref={labelsCanvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

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
            hoveredFeature.properties.formal_name !==
              hoveredFeature.properties.name && (
              <span
                style={{ opacity: 0.7, marginLeft: "8px", fontSize: "12px" }}
              >
                ({hoveredFeature.properties.formal_name})
              </span>
            )}
        </div>
      )}
    </div>
  )
}

export default HistoricalGlobe
