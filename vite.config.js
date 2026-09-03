import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname,'./src/utils/index.js'),
      name: 'YHUtils',
      // 将添加适当的扩展名后缀
      fileName: 'yh-utils',


    },
    rolldownOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: [],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖
        // 提供一个全局变量
        globals: {

        },
      },
    },
  },
})