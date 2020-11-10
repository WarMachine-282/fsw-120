// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBPACFk7NSsXGLWK0BjXyxrXPro70ICbk",
  authDomain: "twitter-clone-b555a.firebaseapp.com",
  databaseURL: "https://twitter-clone-b555a.firebaseio.com",
  projectId: "twitter-clone-b555a",
  storageBucket: "twitter-clone-b555a.appspot.com",
  messagingSenderId: "109174199926",
  appId: "1:109174199926:web:bc71964db344f31a82b157",
  measurementId: "G-D289LJ3J0X",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
