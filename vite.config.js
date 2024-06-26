import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@assets", replacement: "/src/assets" },
        { find: "@components", replacement: "/src/components" },
        { find: "@pages", replacement: "/src/pages" },
      ],
    },
  };
});
