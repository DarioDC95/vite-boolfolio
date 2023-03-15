import { createRouter, createWebHistory } from 'vue-router';

// IMPORTIAMO LE COMPONENTI DA RAPPRESENTARE CON IL ROUTER
import HomePage from './pages/HomePage.vue';
import Contacts from './pages/Contacts.vue';
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
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/:path*',  /* il ":whatever*" diventa un selettore universale di tutte le pagine che non dovessero corrispondere con le rotte qui presenti*/
            name: 'failed',
            component: AppFailed404
        },
        {
            path: '/not_found',
            name: 'not-found',
            component: AppProjectNotFound
        },
    ]
});

export { router };