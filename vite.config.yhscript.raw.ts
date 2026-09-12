// 用于油猴脚本源码的打包配置，保留源码中的注释和格式
import { defineConfig } from 'vite'
import { preserveHotReload, preserveUserscriptHeader } from './vite-plugins'
const dirName = 'watch-input'
// const dirName = 'webhook-test'

const entry = `src/scripts/${dirName}/index.js`
const outDir = `dist/${dirName}`


export default defineConfig({
  plugins: [preserveUserscriptHeader(entry), preserveHotReload(entry)],
  build: {
    outDir: outDir,
    // 禁用压缩和代码混淆
    minify: false,
    emptyOutDir: false,

    lib: {
      entry,
      formats: ['iife'],
      name: 'WatchInput',
      fileName: (format, name) => `index.js`,

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
