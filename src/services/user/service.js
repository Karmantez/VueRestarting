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
        }).then(() => { // eslint-disable-next-line no-console
            console.log("SUCCESS");
            return true;
        }).catch((error) => { // eslint-disable-next-line no-console
            console.log("ERROR: ", error);
            return false;
        });
    },
    async loginWithEmail(email, password) {
        return await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((ret) => {
                console.log(ret);
                return true;
            })
            .catch((error) => {
                console.log("ERROR: ", error);
                return false;
            });
    },
    async registerWithEmail(email, name, password) {
        return await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ret) => { // eslint-disable-next-line no-console
                console.log("SUCCESS: ", ret);
                return this.registerProfile(email, name, password, ret.user.uid)
                    .then(() => {
                        return true;
                    }).catch((error) => {
                        console.log("ERROR: ", error);
                        return false;
                    });
            })
            .catch((error) => { // eslint-disable-next-line no-console
                console.log("ERROR: ", error);
                return false;
            });
    },
    async logout() {

        return firebase.auth().signOut()
            .then(() => { // eslint-disable-next-line no-console
                console.log("LOGOUT: ");
                return true;
            })
            .catch((error) => { // eslint-disable-next-line no-console
                console.log("ERROR: ", error);
                return false;
            });
    },

    async authenticateUser(uid) {

        return database.collection(USER).doc(uid)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    return doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    return null;
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
                return null;
            });
    }
};