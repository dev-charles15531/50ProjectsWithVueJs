import { createApp } from 'vue';
import App from './components/Header.vue';
import router from './router';
import {createPinia} from 'pinia'
import './assets/styles/styles.css';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
