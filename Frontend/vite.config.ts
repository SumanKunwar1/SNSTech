import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4100, // ✅ Start dev server on port 4100
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ `@` points to `src/`
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // ✅ Keep excluding this
  },
})
