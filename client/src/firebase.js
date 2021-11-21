//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbeHWeF2ZKNhNAHSw46V7KAPiyVkkFsnw",
  authDomain: "ecommerce-57fba.firebaseapp.com",
  projectId: "ecommerce-57fba",
  storageBucket: "ecommerce-57fba.appspot.com",
  messagingSenderId: "624345254297",
  appId: "1:624345254297:web:d98fc0727335756590ab08",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
