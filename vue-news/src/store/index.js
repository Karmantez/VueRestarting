import Vue from 'vue';
import Vuex from 'vuex';
import { fetchApi, fetchInfo } from '@/api/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {
    GET_USER: state => state.user,
    GET_ITEM: state => state.item,
    GET_LIST: state => state.list,
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
    SET_ITEM: (state, payload) => (state.item = payload),
    SET_LIST: (state, payload) => (state.list = payload),
  },
  actions: {
    /**
     *
     * @param {object} param0 context
     * @param {{ url: string, setter: string }} param1 request api url, mutations name
     */
    async FETCH_LIST({ commit }, { name }) {
      return await fetchApi(name)
        .then(response => {
          commit('SET_LIST', response.data);
          return { success: true, status: response.status };
        })
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
