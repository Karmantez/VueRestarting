import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '@/views/NewsView';
import AskView from '@/views/AskView';
import JobsView from '@/views/JobsView';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';

import store from '@/store';
import bus from '@/utils/bus';

// High Order Component
// import CreateListView from '@/views/CreateListView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    // component: CreateListView('NewsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      store
        .dispatch('FETCH_LIST', { name: to.name })
        .then(({ success }) => {
          if (success) {
            // bus.$emit('end:spinner');
            next();
          }
        })
        .catch(error => console.log(error));
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    // component: CreateListView('AskView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      store
        .dispatch('FETCH_LIST', { name: to.name })
        .then(({ success }) => {
          if (success) {
            // bus.$emit('end:spinner');
            next();
          }
        })
        .catch(error => console.log(error));
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    // component: CreateListView('JobsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');
      store
        .dispatch('FETCH_LIST', { name: to.name })
        .then(({ success }) => {
          if (success) {
            // bus.$emit('end:spinner');
            next();
          }
        })
        .catch(error => console.log(error));
    },
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
