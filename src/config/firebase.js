// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRvqC39oaNvw5dfipgRQ5aQu3njUNxWOQ",
  authDomain: "thesignupkingdom.firebaseapp.com",
  projectId: "thesignupkingdom",
  storageBucket: "thesignupkingdom.appspot.com",
  messagingSenderId: "1008914039702",
  appId: "1:1008914039702:web:a407c378da1c8b49e213b7",
  measurementId: "G-MMX306FS64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);