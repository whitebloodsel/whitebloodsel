import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ViteImageOptimizer({
      webp: { quality: 75 },
      avif: { quality: 70 },
    }),],
  
  define: {
    'global': {},
  },
  resolve: {
    alias: {
    '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
    '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
    '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
    '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
    '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    'url': 'url',
    },
  },
})
