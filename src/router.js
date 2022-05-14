import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import AddNote from './views/AddNote.vue';

const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/add-note', 
        component: AddNote
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;