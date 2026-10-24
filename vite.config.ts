import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // "@/..." means "src/..." (the shadcn/ui components are written that way)
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    proxy: {
      // Development only: the status card reads the Oracle Cloud server through this path, which avoids CORS
      // while developing (see src/lib/serverApi.ts).
      '/server-api': {
        target: 'https://shinheeyoun.duckdns.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server-api/, ''),
      },
    },
  },
  test: {
    environment: 'node',
  },
})
