import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'

const entry = 'src/webhook-test/index.js'
const source = readFileSync(entry,'utf8')
const userscriptHeader = source.match(/^\/\/ ==UserScript==[\s\S]*?^\/\/ ==\/UserScript==\s*/m)?.[0] ?? ''

export default defineConfig({
  mode: 'development',
  build: {
    outDir: 'dist/webhook-test',
    // 禁用压缩和代码混淆
    minify: false,

    lib: {
      entry,
      formats: ['es'],
    },
    rolldownOptions: {
      external: [],
      treeshake: false,
      output: {
        banner: userscriptHeader,
        globals: {},
      },
    },
  },
})
