import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Minify output
    minify: 'esbuild',
    // Optimize dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['react-bootstrap', 'bootstrap'],
        },
      },
    },
    // Configure chunk size warning
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Configure proxy for API requests during development
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
