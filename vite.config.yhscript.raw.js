// 用于油猴脚本源码的打包配置，保留源码中的注释和格式
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'

const entry = 'src/scripts/webhook-test/index.js'
const source = readFileSync(entry,'utf8')
const userscriptHeader = source.match(/^\/\/ ==UserScript==[\s\S]*?^\/\/ ==\/UserScript==\s*/m)?.[0] ?? ''

export default defineConfig({
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
