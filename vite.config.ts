import { defineConfig } from 'vite'
import path, { resolve } from 'path' // pnpm i @types/node -D
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  /** 共享配置 */
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // @ 符号 指向src 所谓的别名配置
    }
  },
  plugins: [vue()],
  /** 开发服务器选项 */
  server: {
    port: 2022, // 指定开发服务器端口
    open: true // 自动在浏览器中打开
  }
})
