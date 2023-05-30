import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './router';

// poi gli dico di utilizzarlo prima di montare l'app
createApp(App).use(router).mount('#app');

