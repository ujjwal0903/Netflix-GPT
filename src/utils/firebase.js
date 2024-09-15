/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChizt0u1cPjGsLjzWEHAAzILocqnAUde8",
  authDomain: "netflix-gpt-7e22a.firebaseapp.com",
  projectId: "netflix-gpt-7e22a",
  storageBucket: "netflix-gpt-7e22a.appspot.com",
  messagingSenderId: "906011568275",
  appId: "1:906011568275:web:4ad09f055c2e914a1f4566",
  measurementId: "G-VNERM25KPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();