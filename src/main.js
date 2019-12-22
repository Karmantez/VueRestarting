import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";

// Import Modal
import swal from 'sweetalert';

Vue.config.productionTip = false;

// Define Vue.prototype
Vue.prototype.$swal = swal; 


firebase.auth().onAuthStateChanged(async (CURRENT_USER) => {
    
    if(CURRENT_USER) {
        // User is signed in.
        store.commit('User/setUser', { email: CURRENT_USER.providerData[0].email, name: "테스팅"});
        store.state.User.loggedIn = true;
    }
    else {
        // No User is signed in.
        store.commit('User/setUser', { email: "Please Log-in", name: "Guest"});
        store.state.User.loggedIn = false;
    }

    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app');
});