import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), ViteImageOptimizer({})],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      outDir: "dist",
    },
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [],
    },
  };
});
