import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'ui_kit',
      formats: ['es'],
      name: 'ui_kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },
})
