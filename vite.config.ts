import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@presentation': path.resolve(__dirname, './presentation'),
      '@styles': path.resolve(__dirname, './styles'),
      '@config': path.resolve(__dirname, './config'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
    },
  },
});
