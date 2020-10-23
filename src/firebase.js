import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAFelsUM6rCf6TSOdQBzn2trziGC4KvU84",
    authDomain: "tik-tok-clone-debc4.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-debc4.firebaseio.com",
    projectId: "tik-tok-clone-debc4",
    storageBucket: "tik-tok-clone-debc4.appspot.com",
    messagingSenderId: "918932911876",
    appId: "1:918932911876:web:b13988dfb404680a4c8251"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;