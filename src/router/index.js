import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import firebase from "firebase/app";

// Import User Service Components
import Login from '../components/user/Login.vue';
import Register from '../components/user/Register.vue';
import MyPage from '../components/user/MyPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
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
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MyPage,
        meta: {
            requiresAuth: true
        }
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

    if (requiresAuth && !currentUser) {
        alert("로그인이 필요합니다!");
        next('/login');
        return;
    }
    next();
});

export default router;
