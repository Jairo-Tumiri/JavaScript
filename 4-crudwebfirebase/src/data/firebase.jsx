// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrc3fGQJu8FONAVyRTMg3lVF5rcB9YXoU",
  authDomain: "crudwe3b.firebaseapp.com",
  projectId: "crudwe3b",
  storageBucket: "crudwe3b.appspot.com",
  messagingSenderId: "327285368265",
  appId: "1:327285368265:web:62ebc996577a9afd6e3418",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
