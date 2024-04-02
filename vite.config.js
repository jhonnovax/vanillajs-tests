import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'node_modules/froala-editor/js/froala_editor.min.js'),
      fileName: 'froala-editor',
      formats: ['cjs', 'es'],
    },
  }
})