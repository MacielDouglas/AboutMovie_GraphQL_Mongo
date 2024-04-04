import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/graphql": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
