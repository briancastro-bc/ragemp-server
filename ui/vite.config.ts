import { resolve, } from 'path';
import { defineConfig, } from 'vite';

import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths(),
  ],
  build: {
    outDir: resolve('..', 'dist', 'client_packages', 'cef'),
    chunkSizeWarningLimit: 5000,
  }
})
