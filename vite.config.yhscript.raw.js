// 用于油猴脚本源码的打包配置，保留源码中的注释和格式
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
// const dirName = 'watch-input'
const dirName = 'webhook-test'

const entry = `src/scripts/${dirName}/index.js`
const outDir = `dist/${dirName}`
const source = readFileSync(entry,'utf8')
const userscriptHeader =
  source.match(/^\/\/\s*==UserScript==[\s\S]*?^\/\/\s*==\/UserScript==\s*/m)?.[0] ?? ''

function preserveUserscriptHeader() {
  return {
    name: 'preserve-userscript-header',
    generateBundle(_,bundle) {
      for (const output of Object.values(bundle)) {
        if (output.type === 'chunk' && !output.code.startsWith('// ==UserScript==')) {
          output.code = userscriptHeader + output.code
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [preserveUserscriptHeader()],
  build: {
    outDir: outDir,
    // 禁用压缩和代码混淆
    minify: false,

    lib: {
      entry,
      formats: ['iife'],
      name: 'WatchInput',
      fileName: (format,name) => `index.js`,
    },
    rolldownOptions: {
      external: [],
      treeshake: false,
      output: {
        globals: {},
      },
    },
  },
})
