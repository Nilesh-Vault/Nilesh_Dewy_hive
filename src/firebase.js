import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// console.log(getFirestore);



const firebaseConfig = {
    apiKey: "AIzaSyB9QeKDd-nHUBRb4KppYiAhXms1xgrQ4-4",
    authDomain: "nilesh-dewy.firebaseapp.com",
    projectId: "nilesh-dewy",
    storageBucket: "nilesh-dewy.appspot.com",
    messagingSenderId: "493640352212",
    appId: "1:493640352212:web:18955eaae5cc10f9fad641",
    measurementId: "G-8VPNH1LHQ4"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const storage = firebase.storage().ref();



export default db;


