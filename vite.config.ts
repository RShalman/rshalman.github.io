import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

//TODO: fix issues from Lighthouse

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@presentation': path.resolve(__dirname, './presentation'),
      '@styles': path.resolve(__dirname, './styles'),
      '@config': path.resolve(__dirname, './config'),
      '@utils': path.resolve(__dirname, './utils'),
      '@customTypes': path.resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: './docs',
  },
});
