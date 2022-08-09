import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import './assets/styles/styles.css';

const pinia = createPinia()

createApp(App)
    // make v-focus usable in all components
    .directive('focus', {
        mounted: (el) => el.focus()
    })
    .use(pinia)
    .mount('#app')
