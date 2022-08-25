import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@presentation': path.resolve(__dirname, './presentation'),
      '@styles': path.resolve(__dirname, './styles'),
      '@config': path.resolve(__dirname, './config'),
    },
  },
})
