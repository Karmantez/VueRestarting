import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(async (CURRENT_USER) => {
    
    if(CURRENT_USER) {
        // User is signed in.
        store.state.User.loggedIn = true;
    }
    else {
        // No User is signed in.
        store.state.User.loggedIn = false;
    }

    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app');
});