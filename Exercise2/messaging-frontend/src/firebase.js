import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgpkD4K0g_ra8ziSeEwc87K2OlhhIPkGU",
  authDomain: "messaging-app-mern-14396.firebaseapp.com",
  projectId: "messaging-app-mern-14396",
  storageBucket: "messaging-app-mern-14396.appspot.com",
  messagingSenderId: "1004452620147",
  appId: "1:1004452620147:web:4d044d9db2c7dfcf530706",
  measurementId: "G-V6R3E7SXRC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;