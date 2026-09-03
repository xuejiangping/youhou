import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist/a',
    lib: {
      entry: ['src/a/index.js'],
      name: 'YHScript',

      formats: ['umd'],
      // 将添加适当的扩展名后缀
      // fileName: (format,name) => `${name}.${format}.js`


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