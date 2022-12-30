import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './helpers/bootstrap'
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/ace-fonts.css';
import './assets/css/ace.min.css';
import './assets/css/ace-skins.min.css';
import './assets/css/ace-rtl.min.css';
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

// import './assets/js/ace-extra.min.js';

createApp(App).use(store).use(router).mount('#app')

bootstrap().then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
})
