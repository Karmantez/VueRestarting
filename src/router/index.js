import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import firebase from "firebase/app";

// Import User Service Components
import Login from '../components/user/Login.vue';
import Register from '../components/user/Register.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }        
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeEach((to,from,next) =>{
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    console.log(requiresAuth);
    console.log(currentUser);

    next();

    if (requiresAuth && !currentUser) {
        next('/login');
    }
    next();
});

export default router;
