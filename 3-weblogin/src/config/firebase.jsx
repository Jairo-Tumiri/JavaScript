// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjZDHN5e3TDg-8kv1i-s2FJidLRQK2mY4",
  authDomain: "weblog1n.firebaseapp.com",
  projectId: "weblog1n",
  storageBucket: "weblog1n.appspot.com",
  messagingSenderId: "422303663820",
  appId: "1:422303663820:web:2d3420419dfe7ec4e6a469",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
