import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import CategoryService from './pages/CategoryService.vue'; 
import EventDetail from './pages/EventDetail.vue';
import TagDetail from './pages/TagDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {  // I dati saranno disponibili nel componente come: $route.params.id
            path: '/services',
            name: 'typeService',
            component: CategoryService
        },

        {
            path: '/event/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true //I dati saranno disponibili come: id Necessita di una props["id"] nel componente
        },
        {
            path: '/tag/:id',
            name: 'tag-detail',
            component: TagDetail,
            props: true //I dati saranno disponibili come: id Necessita di una props["id"] nel componente
        }
    ]
});

export { router };