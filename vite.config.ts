import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const defaultBase = "/";
const configuredBase = process.env.VITE_BASE_PATH || defaultBase;

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: configuredBase,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
