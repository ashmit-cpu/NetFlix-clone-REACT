import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId,measurementId}from '../Keys/Keys'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
  };


//  export const Firebase = firebase.initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig)

 