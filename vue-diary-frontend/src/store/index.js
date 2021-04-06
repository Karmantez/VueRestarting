import Vue from 'vue';
import Vuex from 'vuex';

import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie(),
    token: getAuthFromCookie(),
  },
  getters: {
    isLogin: state => state.username !== '',
  },
  mutations: {
    setUsername: (state, username) => (state.username = username),
    clearUsername: state => (state.username = ''),
    setToken: (state, token) => (state.token = token),
  },
  actions: {
    async LOGIN({ commit }, userData) {
      // business logic
      const { data } = await loginUser(userData);

      /**
       *  ❓ 로그인한 User의 nickname을 AppHeader로 보내주는 방법
       *    1. emit 사용
       *    2. event bus 사용
       *    3. vuex 사용 ✅
       */
      commit('setUsername', data.user.username);
      // save token
      commit('setToken', data.token);

      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      // return data;
    },
  },
  modules: {},
});
