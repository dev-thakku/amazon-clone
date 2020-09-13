import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA89JS6RKqU94yIfCYDpQlE9kbwv416_XU",
  authDomain: "clone-2643a.firebaseapp.com",
  databaseURL: "https://clone-2643a.firebaseio.com",
  projectId: "clone-2643a",
  storageBucket: "clone-2643a.appspot.com",
  messagingSenderId: "186083516337",
  appId: "1:186083516337:web:bcfe1c8674d3873bda2790",
  measurementId: "G-FJPT0R93FB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
