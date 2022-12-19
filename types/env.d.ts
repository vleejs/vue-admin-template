/** 声明vite 环境变量类型 */
declare interface ImportMetaEnv {
  readonly VITE_ROUTER_HISTORY: 'hash' | 'history'
  readonly VITE_PUBLIC_PATH: string
}
