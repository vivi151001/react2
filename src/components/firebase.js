// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKN33FhzG4UhaZJITnm3YBvL1zmwUM648",
  authDomain: "appreact-d23ee.firebaseapp.com",
  projectId: "appreact-d23ee",
  storageBucket: "appreact-d23ee.appspot.com",
  messagingSenderId: "487178844645",
  appId: "1:487178844645:web:13a274f69c6434eafed70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);