import { createApp } from 'vue';
import App from './components/Header.vue';
import router from './router';
import './assets/styles/styles.css';


import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMuZfASgs2vbv6kLvLJypedJjJc0j6UpM",
    authDomain: "projectswithvue.firebaseapp.com",
    projectId: "projectswithvue",
    storageBucket: "projectswithvue.appspot.com",
    messagingSenderId: "1083246918450",
    appId: "1:1083246918450:web:60626ce38835f23983352b"
};

//initialize the firebase app
const firebase = initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount('#app')
