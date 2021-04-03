import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ChartPlugin from '@/plugins/ChartPlugin';

Vue.config.productionTip = false;

Vue.use(ChartPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
