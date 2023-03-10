import { createRouter, createWebHistory } from 'vue-router';

// IMPORTIAMO LE COMPONENTI DA RAPPRESENTARE CON IL ROUTER
import HomePage from './pages/HomePage.vue';
import AppProject from './pages/project/AppProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/proj',
            name: 'projects',
            component: AppProject
        }
    ]
});

export { router };