/**
 *  Where to store information of logged in users
 */

const state = {
    user: {},
    loggedIn: false
};

const getters = {

    getUser: () => state.user,
    getLoggedIn: () => state.loggedIn
};

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    },
    setLoggedIn: (state, logged) => {
        state.loggedIn = logged;
    }
};

export default {
    state,
    getters,
    mutations
};