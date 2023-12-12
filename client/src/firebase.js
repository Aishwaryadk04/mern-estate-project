// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b377f.firebaseapp.com",
  projectId: "mern-estate-b377f",
  storageBucket: "mern-estate-b377f.appspot.com",
  messagingSenderId: "786040026394",
  appId: "1:786040026394:web:8aa5ea09840768b68f28a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);