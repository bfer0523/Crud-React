/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtzcVEAmi9fz0f27ROugTJxI7Jk9kx_NM",
  authDomain: "crud-fire-react-ff1e9.firebaseapp.com",
  projectId: "crud-fire-react-ff1e9",
  storageBucket: "crud-fire-react-ff1e9.appspot.com",
  messagingSenderId: "897155223440",
  appId: "1:897155223440:web:1135083d62d3c4f97cad15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);