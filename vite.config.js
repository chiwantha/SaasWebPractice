import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//aaaa
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
