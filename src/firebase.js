import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8O2w6s0Jl0WswQH4RqgT7-2w8GFyNgG4",
    authDomain: "mymovielist-rjs.firebaseapp.com",
    databaseURL: "https://mymovielist-rjs.firebaseio.com",
    projectId: "mymovielist-rjs",
    storageBucket: "mymovielist-rjs.appspot.com",
    messagingSenderId: "175697701473",
    appId: "1:175697701473:web:adace9134f0609cceb1820"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const googleProv = new firebase.auth.GoogleAuthProvider();
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
