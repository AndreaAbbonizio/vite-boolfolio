import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjecstIndex from './pages/ProjectsIndex.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectShow from './pages/ProjectShow.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,

        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjecstIndex,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,

        },

        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,

        },
    ]

});

export { router };