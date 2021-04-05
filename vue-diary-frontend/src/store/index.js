import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  getters: {
    isLogin: state => state.username !== '',
  },
  mutations: {
    setUsername: (state, username) => (state.username = username),
    clearUsername: state => (state.username = ''),
  },
  actions: {},
  modules: {},
});
