import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './helpers/bootstrap'

createApp(App).use(store).use(router).mount('#app')

bootstrap().then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
})
