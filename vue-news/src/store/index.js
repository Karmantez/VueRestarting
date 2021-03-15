import Vue from 'vue';
import Vuex from 'vuex';
import { fetchApi } from '@/api/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  getters: {
    GET_NEWS: state => state.news,
    GET_JOBS: state => state.jobs,
    GET_ASKS: state => state.asks,
  },
  mutations: {
    SET_NEWS: (state, payload) => (state.news = payload),
    SET_JOBS: (state, payload) => (state.jobs = payload),
    SET_ASKS: (state, payload) => (state.asks = payload),
  },
  actions: {
    /**
     *
     * @param {object} param0 context
     * @param {{ url: string, setter: string }} param1 request api url, mutations name
     */
    FETCH_LIST({ commit }, { url, setter }) {
      fetchApi(url)
        .then(({ data }) => commit(setter, data))
        .catch(error => console.log(error));
    },
  },
  modules: {},
});
