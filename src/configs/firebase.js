// Initialize Firebase
import firebase from "firebase";

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD0ITpXgWxsa39hPzarQ0byjdVkvrvnYOU",
    authDomain: "just0110-test-hooks.firebaseapp.com",
    databaseURL: "https://just0110-test-hooks.firebaseio.com",
    projectId: "just0110-test-hooks",
    storageBucket: "just0110-test-hooks.appspot.com",
    messagingSenderId: "872180067750",
    appId: "1:872180067750:web:8c3c755f4ae4a3a49df367"
  };

  firebase.initializeApp(firebaseConfig);
};
