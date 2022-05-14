import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import AddNote from './views/AddNote.vue';
import NoteDetail from './views/NoteDetail.vue';

const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/add-note', 
        component: AddNote
    },
    {
        path: '/note/:id', 
        component: NoteDetail,
        props: true
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;