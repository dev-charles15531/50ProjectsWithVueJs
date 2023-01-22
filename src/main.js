import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import "./assets/styles/styles.css";

const pinia = createPinia();
const head = createHead();

createApp(App).use(pinia).use(head).mount("#app");
