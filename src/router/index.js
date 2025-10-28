import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Exercises from '@/views/Exercises.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        // La on a une route pour notre page / (l'accueil)
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: ()=> import('@/views/Home.vue')
        },
        {
            path: '/',
            alias: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            alias: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/exercises',
            alias: '/exercises',
            name: 'exercises',
            component: ()=> import('@/views/Exercises.vue')
        },
        {
            path: '/vbindexo',
            name: 'exercises',
            component: ()=> import('@/views/VBindExo.vue')
        },
    ]
})

export default router;
