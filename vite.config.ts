import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        // Важно: так стили попадут в отдельный CSS
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'index.css') {
            return 'style.css'
          }

          return assetInfo.name!
        },
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
