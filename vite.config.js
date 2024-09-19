import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//-Add
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
