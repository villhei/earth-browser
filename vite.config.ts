import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import fs from "fs"

function githubPagesPlugin(): Plugin {
  return {
    name: "github-pages-bundle-enhancer",
    closeBundle() {
      const docsDir = path.resolve(__dirname, "docs")
      const indexPath = path.join(docsDir, "index.html")
      const fallbackPath = path.join(docsDir, "404.html")
      const noJekyllPath = path.join(docsDir, ".nojekyll")

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
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-three": ["three"],
          "vendor-globe": ["three-globe"],
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [react(), githubPagesPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
    },
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
})

