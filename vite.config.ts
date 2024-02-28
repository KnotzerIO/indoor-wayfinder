import { defineConfig } from "vite";
import { dependencies } from "./package.json";
function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { splitVendorChunkPlugin } from "vite";
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    server: {
      https: true,
    },
    plugins: [react(), mkcert(), ViteImageOptimizer({})],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      outDir: "../server/dist/client",
    },
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [],
    },
  };
});
