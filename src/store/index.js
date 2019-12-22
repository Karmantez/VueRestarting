import Vue from 'vue';
import Vuex from 'vuex';

/**
 *  Import User Store
 */
import UserStore from './user/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false
    },
    getters: {
        getLoading: (state) => state.loading,
    },
    mutations: {
        setLoading: (state, loading) => {
            state.loading = loading;
        }
    },
    actions: {
    },
    modules: {

        User: UserStore
    }
});
