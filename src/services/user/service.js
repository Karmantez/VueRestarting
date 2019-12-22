// Import Vue for vue-logger
import Vue from 'vue';
// Import Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Import Firebase Config
import configData from "../firebase.js";
firebase.initializeApp(configData);

const database = firebase.firestore();

// Collection Names
const USER = "user";

// Service Api
export default {

    async registerProfile(email, name, password, uid) {

        return await database.collection(USER).doc(uid).set({
            email,
            name,
            password,
            uid
        }).then(() => {
            return true;
        }).catch((error) => {
            Vue.$log.debug(error);
            return false;
        });
    },
    async loginWithEmail(email, password) {
        return await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                return {
                    title: 'WELCOME!',
                    text: 'Success Log-In',
                    icon: 'success',
                    button: 'OK!'
                };
            })
            .catch((error) => {
                Vue.$log.debug(error);
                return {
                    title: 'ERROR',
                    text: error.message,
                    icon: 'error',
                    button: 'OK'
                };
            });
    },
    async registerWithEmail(email, name, password) {
        return await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (ret) => {
                Vue.$log.debug(ret);
                return this.registerProfile(email, name, password, ret.user.uid)
                    .then(() => {
                        return true;
                    }).catch((error) => {
                        Vue.$log.debug(error);
                        return false;
                    });
            })
            .catch((error) => { 
                Vue.$log.debug(error);
                return false;
            });
    },
    async logout() {

        return firebase.auth().signOut()
            .then(() => {
                return {
                    title: 'GoodBye',
                    text: 'Success Log-Out',
                    icon: 'success',
                    button: 'OK'
                };
            })
            .catch((error) => { 
                Vue.$log.debug(error);
                return {
                    title: 'ERROR',
                    text: error.message,
                    icon: 'error',
                    button: 'OK'
                };
            });
    }
};