import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import lazyLoading from '@/utils';

Vue.config.productionTip = false;

Vue.directive('lazyLoading', lazyLoading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
