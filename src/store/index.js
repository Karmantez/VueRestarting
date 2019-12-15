import Vue from 'vue';
import Vuex from 'vuex';

/**
 *  Import User Store
 */
import UserStore from './user/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {

        User: UserStore
    }
});
