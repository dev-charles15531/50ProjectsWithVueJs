import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/styles/styles.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
