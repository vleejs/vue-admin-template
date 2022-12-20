import { type ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path' // pnpm i @types/node -D
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode, ssrBuild }: ConfigEnv) => {
  const viteEnv = loadEnv(mode, process.cwd(), '') as ImportMetaEnv // loadEnv 函数来加载指定的 .env 文件
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    /** 共享配置 */
    base: VITE_PUBLIC_PATH, // "base" option should start with a slash
    resolve: {
      alias: {
        '@': resolve(__dirname, '.', 'src') // @ 符号 指向src 所谓的别名配置
      }
    },
    plugins: [vue()],
    /** 开发服务器选项 */
    server: {
      port: 2022, // 指定开发服务器端口
      open: true // 自动在浏览器中打开
    }
  }
})
