import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import CategoryService from './pages/CategoryService.vue'; 
import EventDetail from './pages/EventDetail.vue';

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
        {
            path: '/services',
            name: 'typeService',
            component: CategoryService
        },

        {
            path: '/event/:id',
            name: 'event-detail',
            component: EventDetail
        }
    ]
});

export { router };