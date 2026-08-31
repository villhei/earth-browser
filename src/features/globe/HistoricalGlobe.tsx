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
  getPolygonCapMaterial,
  clearPolygonMaterialCache,
} from "./polygonMaterials"
import {
  PlacedLabel,
  computePlacedLabels,
  renderLabelsToCanvas,
  cartesian2Polar,
} from "./labels"
import { sanitizeRenderableFeatures } from "./geometrySanitizer"
import { GeoJSONFeature } from "../../types"

const DEFAULT_ALTITUDE = 0.002
const DEFAULT_OPACITY = 0.55
const DEFAULT_SIDE_COLOR = "#ffffff"
const DEFAULT_STROKE_COLOR = "#000000"
const DEFAULT_CAP_CURVATURE_RESOLUTION = 1
const DEFAULT_ELEVATION_SCALE = 0.3

export const HistoricalGlobe: React.FC<HistoricalGlobeProps> = ({
  data,
  isLoading = false,
  texture = GlobeTexture.EARTH_BLUE_MARBLE,
  layerAltitude = DEFAULT_ALTITUDE,
  elevationScale = DEFAULT_ELEVATION_SCALE,
  opacity = DEFAULT_OPACITY,
  sideColor = DEFAULT_SIDE_COLOR,
  strokeColor = DEFAULT_STROKE_COLOR,
  selectedFeatureId = null,
  hoveredFeatureId = null,
  showLabels = true,
  labelSize = 14,
  labelTolerance = 10,
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

  // Pre-filter & sanitize renderable features (stripping zero-area/collapsed slivers and unclaimed entities)
  const renderableFeatures = React.useMemo(() => {
    return sanitizeRenderableFeatures(data?.features)
  }, [data])

  // Mutable refs to keep animation loop in sync with props without re-initializing
  const dataRef = useRef(data)
  const renderableFeaturesRef = useRef(renderableFeatures)
  const showLabelsRef = useRef(showLabels)
  const labelSizeRef = useRef(labelSize)
  const labelToleranceRef = useRef(labelTolerance)
  const layerAltitudeRef = useRef(layerAltitude)
  const elevationScaleRef = useRef(elevationScale)
  const selectedFeatureIdRef = useRef(selectedFeatureId)
  const hoveredFeatureIdRef = useRef(hoveredFeatureId)
  const hoveredFeatureRef = useRef(hoveredFeature)
  const onFeatureClickRef = useRef(onFeatureClick)
  const onFeatureHoverRef = useRef(onFeatureHover)

  useEffect(() => {
    dataRef.current = data
    renderableFeaturesRef.current = renderableFeatures
    showLabelsRef.current = showLabels
    labelSizeRef.current = labelSize
    labelToleranceRef.current = labelTolerance
    layerAltitudeRef.current = layerAltitude
    elevationScaleRef.current = elevationScale
    selectedFeatureIdRef.current = selectedFeatureId
    hoveredFeatureIdRef.current = hoveredFeatureId
    hoveredFeatureRef.current = hoveredFeature
    onFeatureClickRef.current = onFeatureClick
    onFeatureHoverRef.current = onFeatureHover
  }, [
    data,
    renderableFeatures,
    showLabels,
    labelSize,
    labelTolerance,
    layerAltitude,
    elevationScale,
    selectedFeatureId,
    hoveredFeatureId,
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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
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
    globe.rendererSize(new THREE.Vector2(width || window.innerWidth, height || window.innerHeight))

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

    // Bounding sphere for fast raycast early exit (avoiding deep mesh traversal on space misses)
    const globeBoundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 100 * 1.06)

    // Raycaster for 3D polygon pointer interactions
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const getIntersectedFeature = (
      clientX: number,
      clientY: number,
    ): { feature: GeoJSONFeature; point: THREE.Vector3 } | null => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      // Fast rejection against Earth bounding sphere
      if (!raycaster.ray.intersectsSphere(globeBoundingSphere)) {
        return null
      }

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
        if (current && current.__data) {
          const raw = current.__data
          const feat = (raw.data || raw) as GeoJSONFeature
          if (feat && (feat.geometry || feat.properties || feat.type === "Feature")) {
            return {
              feature: feat,
              point: hit.point,
            }
          }
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

    let isMouseDown = false
    let isDragging = false
    let pointerDownPos = { x: 0, y: 0 }
    let pendingPointer: { x: number; y: number } | null = null
    let hasPendingPointer = false
    let hoveredPointLat = 0
    let hoveredPointLng = 0
    let hasHoveredPoint = false

    const handlePointerDown = (e: MouseEvent) => {
      isMouseDown = true
      isDragging = false
      pointerDownPos = { x: e.clientX, y: e.clientY }
    }

    const handlePointerMove = (e: MouseEvent) => {
      if (isMouseDown || e.buttons !== 0) {
        const dx = Math.abs(e.clientX - pointerDownPos.x)
        const dy = Math.abs(e.clientY - pointerDownPos.y)
        if (dx > 4 || dy > 4) {
          isDragging = true
        }
      } else {
        isDragging = false
        pendingPointer = { x: e.clientX, y: e.clientY }
        hasPendingPointer = true
      }
    }

    const handlePointerUp = () => {
      isMouseDown = false
    }

    const handlePointerLeave = () => {
      isMouseDown = false
      isDragging = false
      pendingPointer = null
      hasPendingPointer = false
      hasHoveredPoint = false
      const curHov = hoveredFeatureRef.current
      if (curHov !== null) {
        hoveredFeatureRef.current = null
        setHoveredFeature(null)
        if (onFeatureHoverRef.current) {
          onFeatureHoverRef.current(null)
        }
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
        const hit = getIntersectedFeature(e.clientX, e.clientY)
        if (onFeatureClickRef.current) onFeatureClickRef.current(hit?.feature || null)
      }
    }

    container.addEventListener("pointerdown", handlePointerDown as any)
    container.addEventListener("pointermove", handlePointerMove as any)
    container.addEventListener("pointerup", handlePointerUp as any)
    container.addEventListener("pointerleave", handlePointerLeave as any)
    container.addEventListener("mousedown", handlePointerDown)
    container.addEventListener("mousemove", handlePointerMove)
    container.addEventListener("mouseup", handlePointerUp)
    container.addEventListener("mouseleave", handlePointerLeave)
    container.addEventListener("click", handleClick)

    // State trackers for label engine dirty-checking to eliminate 0-cost idle rendering
    const lastCamPos = new THREE.Vector3()
    const lastCamQuat = new THREE.Quaternion()
    let lastSelectedId: string | null = null
    let lastHoveredId: string | null = null
    let lastHoveredLat = 0
    let lastHoveredLng = 0
    let lastW = 0
    let lastH = 0
    let lastLabelSize = 0
    let lastLabelTolerance = 0
    let lastLayerAlt = 0
    let lastElevScale = 0
    let lastFeaturesRef: any = null
    let lastShowLabels = true

    let animationFrameId: number
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)

      // Process throttled pointer hover test (at most once per frame)
      if (hasPendingPointer && pendingPointer && !isDragging) {
        hasPendingPointer = false
        const { x: px, y: py } = pendingPointer
        // 1. Check direct label hit
        const hitLabel = getHoveredLabel(px, py)
        if (hitLabel) {
          container.style.cursor = "pointer"
          const curHov = hoveredFeatureRef.current
          const nextHov = hitLabel.feature
          const curHovId =
            curHov?.id != null
              ? String(curHov.id)
              : curHov?.properties?.name || null
          const nextHovId =
            nextHov?.id != null
              ? String(nextHov.id)
              : nextHov?.properties?.name || null

          if (curHovId !== nextHovId) {
            hoveredFeatureRef.current = nextHov
            setHoveredFeature(nextHov)
            if (onFeatureHoverRef.current)
              onFeatureHoverRef.current(nextHov)
          }
        } else {
          // 2. Fall back to 3D geometry hit
          const hit = getIntersectedFeature(px, py)
          const feat = hit?.feature || null
          if (hit) {
            const polar = cartesian2Polar(hit.point)
            hoveredPointLat = polar.lat
            hoveredPointLng = polar.lng
            hasHoveredPoint = true
          } else {
            hasHoveredPoint = false
          }

          const curHov = hoveredFeatureRef.current
          const curHovId =
            curHov?.id != null
              ? String(curHov.id)
              : curHov?.properties?.name || null
          const nextHovId =
            feat?.id != null
              ? String(feat.id)
              : feat?.properties?.name || null

          if (curHovId !== nextHovId) {
            hoveredFeatureRef.current = feat
            setHoveredFeature(feat)
            if (onFeatureHoverRef.current)
              onFeatureHoverRef.current(feat)
          }
          container.style.cursor = feat ? "pointer" : "grab"
        }
      }

      // 2D Screen-space non-overlapping labels rendering with dirty checking
      if (labelsCanvasRef.current && camera) {
        const w = container.clientWidth || window.innerWidth
        const h = container.clientHeight || window.innerHeight
        const curFeatures = renderableFeaturesRef.current
        const curSelectedId = selectedFeatureIdRef.current
        const curHoveredId =
          hoveredFeatureIdRef.current ??
          (hoveredFeatureRef.current?.id != null
            ? String(hoveredFeatureRef.current.id)
            : hoveredFeatureRef.current?.properties?.name || null)
        const curShowLabels = showLabelsRef.current
        const curLabelSize = labelSizeRef.current
        const curLabelTol = labelToleranceRef.current
        const curLayerAlt = layerAltitudeRef.current
        const curElevScale = elevationScaleRef.current

        const isCamDirty =
          lastCamPos.distanceToSquared(camera.position) > 1e-4 ||
          Math.abs(lastCamQuat.dot(camera.quaternion) - 1) > 1e-4

        const isHoverPointDirty =
          hasHoveredPoint &&
          (Math.abs(lastHoveredLat - hoveredPointLat) > 1e-3 ||
            Math.abs(lastHoveredLng - hoveredPointLng) > 1e-3)

        const isLabelsDirty =
          isCamDirty ||
          lastSelectedId !== curSelectedId ||
          lastHoveredId !== curHoveredId ||
          isHoverPointDirty ||
          lastW !== w ||
          lastH !== h ||
          lastLabelSize !== curLabelSize ||
          lastLabelTolerance !== curLabelTol ||
          lastLayerAlt !== curLayerAlt ||
          lastElevScale !== curElevScale ||
          lastFeaturesRef !== curFeatures ||
          lastShowLabels !== curShowLabels

        if (isLabelsDirty) {
          lastCamPos.copy(camera.position)
          lastCamQuat.copy(camera.quaternion)
          lastSelectedId = curSelectedId
          lastHoveredId = curHoveredId
          lastHoveredLat = hoveredPointLat
          lastHoveredLng = hoveredPointLng
          lastW = w
          lastH = h
          lastLabelSize = curLabelSize
          lastLabelTolerance = curLabelTol
          lastLayerAlt = curLayerAlt
          lastElevScale = curElevScale
          lastFeaturesRef = curFeatures
          lastShowLabels = curShowLabels

          const c2d = labelsCanvasRef.current
          const ctx = c2d.getContext("2d")
          if (ctx) {
            const shouldRender = (curShowLabels || curHoveredId) && curFeatures.length > 0
            if (shouldRender) {
              const placed = computePlacedLabels(
                curFeatures,
                camera,
                w,
                h,
                {
                  layerAltitude: curLayerAlt,
                  elevationScale: curElevScale,
                  selectedFeatureId: curSelectedId,
                  hoveredFeatureId: curHoveredId,
                  hoveredPoint: hasHoveredPoint
                    ? { lat: hoveredPointLat, lng: hoveredPointLng }
                    : null,
                  baseFontSize: curLabelSize,
                  labelTolerance: curLabelTol,
                  onlyHoveredOrSelected: !curShowLabels,
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
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

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
      if (globeRef.current) {
        globeRef.current.rendererSize(new THREE.Vector2(w, h))
      }

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
      container.removeEventListener("pointerdown", handlePointerDown as any)
      container.removeEventListener("pointermove", handlePointerMove as any)
      container.removeEventListener("pointerup", handlePointerUp as any)
      container.removeEventListener("pointerleave", handlePointerLeave as any)
      container.removeEventListener("mousedown", handlePointerDown)
      container.removeEventListener("mousemove", handlePointerMove)
      container.removeEventListener("mouseup", handlePointerUp)
      container.removeEventListener("mouseleave", handlePointerLeave)
      container.removeEventListener("click", handleClick)
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      clearPolygonMaterialCache()
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

  // 4. Layer Altitude update (incorporating precalculated topological elevation tiers for overlapping/nested polygons)
  useEffect(() => {
    if (globeRef.current) {
      const tierStep = 0.0025 * (elevationScale ?? DEFAULT_ELEVATION_SCALE)
      globeRef.current.polygonAltitude((d: any) => {
        const feat = d as GeoJSONFeature
        const props = feat.properties || {}
        const name = props.name || props.NAME || ""
        if (props.is_unclaimed || isNeutralOrUnclaimed(name)) {
          return 0.0
        }
        const tier = Number(props.elevation_tier ?? props.elevationTier ?? 0)
        return layerAltitude + tier * tierStep
      })
    }
  }, [layerAltitude, elevationScale])

  // 4b. Side Color update
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
        return strokeColor || "transparent"
      })
    }
  }, [strokeColor])

  // 6. Polygon cap material: handles solid colors, PARTOF parent color, and SUBJECTO striping
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current

    globe.polygonCapMaterial((d: any) => {
      const feat = d as GeoJSONFeature
      return getPolygonCapMaterial(feat, {
        opacity,
        selectedFeatureId,
        hoveredFeatureId:
          hoveredFeature?.id || hoveredFeature?.properties?.name || null,
      })
    })
  }, [opacity, selectedFeatureId, hoveredFeature])

  // 7. Polygons Data Synchronization
  useEffect(() => {
    if (!globeRef.current) return
    const globe = globeRef.current
    globe.polygonsData(renderableFeatures)
    // Clear three-globe 3D text meshes in favor of fixed-scale non-overlapping canvas labels
    globe.labelsData([])
  }, [renderableFeatures])

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
