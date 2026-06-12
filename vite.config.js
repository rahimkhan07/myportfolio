import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx", ".json"],
  },
});
