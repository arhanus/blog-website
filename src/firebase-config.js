import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFzUe26KOm7am_CGQsstWZ7XcweAuts7M",
  authDomain: "blog-website-7b5f1.firebaseapp.com",
  projectId: "blog-website-7b5f1",
  storageBucket: "blog-website-7b5f1.appspot.com",
  messagingSenderId: "538238106783",
  appId: "1:538238106783:web:6f775d6535c6f77d15f6aa"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)
