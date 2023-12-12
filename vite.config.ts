import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import FullReload from 'vite-plugin-full-reload' // 사내 개발

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), FullReload('src/**')],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'm_shopbox.min.js',
      },
    },
  },
})
