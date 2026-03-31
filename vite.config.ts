import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: path.resolve(__dirname, "resources"),
  plugins: [react(), FullReload("**/*.php")],
  server: {
    cors: true,
    strictPort: true,
    port: 5173,
    origin: "http://localhost:5173",
  },
  build: {
    outDir: "../public",
    assetsDir: "scripts",
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      input: {
        style: path.resolve(__dirname, `resources/css/style.scss`),
        script: path.resolve(__dirname, `resources/js/script.ts`),
      },
    },
  },
});

// https://vite.dev/config/
