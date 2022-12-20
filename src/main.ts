import { createApp } from 'vue'
import App from './App.vue'
import { loadPlugins } from './plugins'
import { setupRouter } from './router'
import { setupStore } from './store'
function bootstrap() {
  const app = createApp(App)
  loadPlugins(app)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

bootstrap()
