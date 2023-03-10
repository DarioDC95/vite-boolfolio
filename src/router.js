import { createRouter, createWebHistory } from 'vue-router';

// IMPORTIAMO LE COMPONENTI DA RAPPRESENTARE CON IL ROUTER
import HomePage from './pages/HomePage.vue';
import AppProject from './pages/project/AppProject.vue';
import AppSingleProject from './pages/project/AppSingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/proj',
            name: 'projects',
            component: AppProject
        },
        {
            path: '/proj/:slug',  /* l'aggiunta ':slug' indica che gli passiamo un parametro che necessiterà deverso ogni volta si presume */
            name: 'single-project',
            component: AppSingleProject
        }
    ]
});

export { router };