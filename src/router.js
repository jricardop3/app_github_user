import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Info from './views/Info.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/info', component: Info }
];

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;
