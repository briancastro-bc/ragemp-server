import { resolve, } from 'path';
import { defineConfig, } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
  },
  root: resolve('src', 'client', 'cef'),
  build: {
    outDir: resolve('dist', 'client_packages', 'cef'),
  }
})
