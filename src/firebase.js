import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDHaqcECpf8ipDO5tkDj4ORK42oTbfFKgM",
    authDomain: "fb-crud-ab6fa.firebaseapp.com",
    projectId: "fb-crud-ab6fa",
    storageBucket: "fb-crud-ab6fa.appspot.com",
    messagingSenderId: "153560596845",
    appId: "1:153560596845:web:7879db4cdf1c0c7975da64"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore();

export default db;