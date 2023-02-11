import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), viteCommonjs(), envCompatible()],
  build: {
    rollupOptions: {
      plugins: [resolve],
    },
  },
});
