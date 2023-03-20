import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components'
      // hooks: '/src/hooks',
      // pages: '/src/pages',
      // store: '/src/store',
      // types: '/src/types',
      // ui: '/src/ui',
      // utils: '/src/utils'
    }
  }
})
