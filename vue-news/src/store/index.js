import Vue from 'vue';
import Vuex from 'vuex';
import { fetchApi, fetchInfo } from '@/api/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: [],
  },
  getters: {
    GET_NEWS: state => state.news,
    GET_JOBS: state => state.jobs,
    GET_ASKS: state => state.asks,
    GET_USER: state => state.user,
    GET_ITEM: state => state.item,
  },
  mutations: {
    SET_NEWS: (state, payload) => (state.news = payload),
    SET_JOBS: (state, payload) => (state.jobs = payload),
    SET_ASKS: (state, payload) => (state.asks = payload),
    SET_USER: (state, payload) => (state.user = payload),
    SET_ITEM: (state, payload) => (state.item = payload),
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

    /**
     *
     * @param {object} param0
     * @param {object} param1
     * @param {string} param1.type
     * @param {string} param1.id
     * @param {string} param2
     */
    FETCH_INFO({ commit }, { type, id, setter }) {
      fetchInfo({ type, id })
        .then(({ data }) => commit(setter, data))
        .catch(error => console.log(error));
    },
  },
  modules: {},
});
