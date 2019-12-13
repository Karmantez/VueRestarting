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

    async register(email, password) {

        // return await database.collection(USER).doc(email).set({
        //     email,
        //     name,
        //     password
        // }).then(() => { // eslint-disable-next-line no-console
        //     console.log("SUCCESS");
        //     return true;
        // }).catch((error) => { // eslint-disable-next-line no-console
        //     console.log("ERROR: ", error);
        //     return false;
        // });
        return await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ret) => { // eslint-disable-next-line no-console
                console.log("SUCCESS: ", ret);
                return true;
            })
            .catch((error) => { // eslint-disable-next-line no-console
                console.log("ERROR: ", error);
                return false;
            });
    },
    async login(email, password) {

        // return await database.collection(USER).doc(email)
        //     .get()
        //     .then(function(doc) {
        //         if (doc.exists) {
        //             console.log("Document data:", doc.data());

        //             if(doc.data().password === password)
        //                 return true;
        //             return false;
        //         } else {
        //             // doc.data() will be undefined in this case
        //             console.log("No such document!");
        //             return false;
        //         }
        //     }).catch(function(error) {
        //         console.log("Error getting document:", error);
        //         return false;
        //     });
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
    }
};