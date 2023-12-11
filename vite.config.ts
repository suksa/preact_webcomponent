import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import FullReload from 'vite-plugin-full-reload' // 사내 개발 환경에서 알수없는 이유로 hotreload가 작동 안되어 추가함

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), FullReload('src/**')],
})
