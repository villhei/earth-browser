import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"

describe("Responsive layout and controls positioning", () => {
  it("collapses CountryDrawer to mobile view in screen sizes smaller than 1280 wide", () => {
    const cssPath = path.resolve(__dirname, "./CountryDrawer.css")
    const cssContent = fs.readFileSync(cssPath, "utf-8")

    // Must have media query for screen sizes smaller than 1280 wide
    expect(cssContent).toMatch(/@media\s*\(\s*max-width:\s*1279(?:(?:\.98)?px)?\s*\)/)

    // The mobile view must present the drawer as a centered modal with backdrop
    expect(cssContent).toContain(".country-drawer-backdrop")
    expect(cssContent).toContain("position: fixed")
    expect(cssContent).toContain("transform: translate(-50%, -50%)")
  })

  it("positions bottom-controls-bar at bottom right with controls-overlay and attribution offset with --space-10", () => {
    const appCssPath = path.resolve(__dirname, "../app/App.css")
    const appCssContent = fs.readFileSync(appCssPath, "utf-8")

    expect(appCssContent).toContain(".bottom-controls-bar")
    expect(appCssContent).toMatch(/bottom:\s*var\(--space-10\)/)
    expect(appCssContent).toMatch(/right:\s*var\(--space-10\)/)
  })

  it("styles both Settings and Attribution as icon-only buttons with matching 44x44 circular dimensions", () => {
    const controlsCssPath = path.resolve(__dirname, "./ControlsOverlay.css")
    const controlsCss = fs.readFileSync(controlsCssPath, "utf-8")

    const attributionCssPath = path.resolve(__dirname, "./Attribution.css")
    const attributionCss = fs.readFileSync(attributionCssPath, "utf-8")

    // Settings button is icon-only circular 44x44
    expect(controlsCss).toContain("width: 44px")
    expect(controlsCss).toContain("height: 44px")
    expect(controlsCss).toContain("border-radius: var(--radius-round)")

    // Attribution button is icon-only circular 44x44
    expect(attributionCss).toContain("width: 44px")
    expect(attributionCss).toContain("height: 44px")
    expect(attributionCss).toContain("border-radius: var(--radius-round)")
  })

  it("offsets the ActiveEraBanner with --space-10 on desktop and mobile", () => {
    const bannerCssPath = path.resolve(__dirname, "./ActiveEraBanner.css")
    const bannerCss = fs.readFileSync(bannerCssPath, "utf-8")

    // Desktop top offset
    expect(bannerCss).toMatch(/\.active-era-banner\s*\{[^}]*top:\s*var\(--space-10\)/)

    // Mobile top offset
    expect(bannerCss).toMatch(/@media\s*\(max-width:\s*768px\)\s*\{[^}]*\.active-era-banner\s*\{[^}]*top:\s*var\(--space-10\)/)
  })

  it("does not automatically pop up EraDetailsModal on mobile when era changes", () => {
    const appTsxPath = path.resolve(__dirname, "../app/App.tsx")
    const appTsx = fs.readFileSync(appTsxPath, "utf-8")

    // Must not contain auto-opening effect on era change
    expect(appTsx).not.toMatch(/setIsEraDetailsOpen\(true\)\s*\}\s*\}\s*prevEraIdRef/s)
    expect(appTsx).not.toContain("prevEraIdRef")
  })

  it("applies a radial gradient for the globe atmosphere effect", () => {
    const appCssPath = path.resolve(__dirname, "../app/App.css")
    const appCss = fs.readFileSync(appCssPath, "utf-8")

    expect(appCss).toContain("radial-gradient")
    expect(appCss).toContain("var(--color-bg-app)")
    expect(appCss).toContain("var(--color-text-primary)")
  })
})
