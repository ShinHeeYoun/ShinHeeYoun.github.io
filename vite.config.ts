import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Development only: the status card reads the Oracle Cloud server through this path, which avoids CORS
      // while developing (see src/lib/serverApi.ts).
      '/server-api': {
        target: 'http://161.33.194.138:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server-api/, ''),
      },
    },
  },
  test: {
    environment: 'node',
  },
})
