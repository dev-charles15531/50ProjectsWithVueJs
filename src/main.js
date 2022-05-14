import { createApp } from 'vue';
import App from './components/Header.vue';
import router from './router';
import '@/assets/styles/styles.css';

createApp(App)
    .use(router)
    .mount('#app')
