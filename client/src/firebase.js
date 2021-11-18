import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB-2rWRIkdd5Gr-9aYIS7p-z90vjvAPTKw",
    authDomain: "discord-clone-a2d7b.firebaseapp.com",
    projectId: "discord-clone-a2d7b",
    storageBucket: "discord-clone-a2d7b.appspot.com",
    messagingSenderId: "148086133792",
    appId: "1:148086133792:web:93294a12602a9c5b8b5845",
    measurementId: "G-27B2MB9LHF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db ,auth, provider };