import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBVc7QUmvdM-lwfEqiAYLFbv9pQ2f3qEPE",
    authDomain: "fb-crud-react-d403c.firebaseapp.com",
    projectId: "fb-crud-react-d403c",
    storageBucket: "fb-crud-react-d403c.appspot.com",
    messagingSenderId: "87609536064",
    appId: "1:87609536064:web:e723cd64592ae1014fb9a5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
