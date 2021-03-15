import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '@/views/NewsView';
import AskView from '@/views/AskView';
import JobsView from '@/views/JobsView';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    component: NewsView,
  },
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component: JobsView,
  },
  {
    path: '/user/:id',
    component: UserView,
  },
  {
    path: '/item/:id',
    component: ItemView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
