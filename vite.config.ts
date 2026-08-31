import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import fs from "fs"

function githubPagesPlugin(): Plugin {
  return {
    name: "github-pages-bundle-enhancer",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist")
      const indexPath = path.join(distDir, "index.html")
      const fallbackPath = path.join(distDir, "404.html")
      const noJekyllPath = path.join(distDir, ".nojekyll")

      // 1. Ensure .nojekyll exists
      if (!fs.existsSync(noJekyllPath)) {
        fs.writeFileSync(noJekyllPath, "", "utf-8")
      }

      // 2. Ensure 404.html exists as SPA fallback
      if (fs.existsSync(indexPath) && !fs.existsSync(fallbackPath)) {
        fs.copyFileSync(indexPath, fallbackPath)
      }
    },
  }
}

export default defineConfig({
  base: "./",
  plugins: [react(), githubPagesPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
    },
  },
  server: {
    port: 1234,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
})
