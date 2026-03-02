import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Minify using Terser (default, good for production)
    minify: 'terser',
    // Output directory
    outDir: 'dist',
    // Generate sourcemaps for debugging in production if needed
    sourcemap: false,
    // Target modern browsers to reduce bundle size
    target: 'es2020',
    // Improve build performance
    rollupOptions: {
      output: {
        // Optimize chunk sizes
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  // Development server configuration
  server: {
    port: 5173,
    strictPort: false
  }
})
