import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: "/Plumber-X/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: "dist/index.html", dest: "dist/404.html" }],
    }),
  ],
  base: "/Plumber-X/", // 重要！GitHub Pages 需要设置 base 路径
});