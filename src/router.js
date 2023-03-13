import { createRouter, createWebHistory } from 'vue-router';

// IMPORTIAMO LE COMPONENTI DA RAPPRESENTARE CON IL ROUTER
import HomePage from './pages/HomePage.vue';
import AppProject from './pages/project/AppProject.vue';
import AppSingleProject from './pages/project/AppSingleProject.vue';
import AppFailed404 from './components/AppFailed404.vue';
import AppProjectNotFound from './components/AppProjectNotFound.vue';

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
            path: '/proj/:slug',  /* l'aggiunta ':slug' indica che gli passiamo un parametro che necessiterà deverso ogni volta si presume e dovrà conincidere il nome parametro definito nel Back-End Api.php */
            name: 'single-project',
            component: AppSingleProject
        },
        {
            path: '/page_not_found',
            name: 'failed',
            component: AppFailed404
        },
        {
            path: '/project_not_found',
            name: 'not-found',
            component: AppProjectNotFound
        }
    ]
});

export { router };