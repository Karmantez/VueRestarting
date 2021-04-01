import ChartJS from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_ChartJS = ChartJS;
  },
};
