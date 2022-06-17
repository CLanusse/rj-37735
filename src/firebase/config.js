// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkh4eZaPa675abgZ6vtSXrwhSqPtNAGjA",
  authDomain: "rj-37735.firebaseapp.com",
  projectId: "rj-37735",
  storageBucket: "rj-37735.appspot.com",
  messagingSenderId: "1013688462390",
  appId: "1:1013688462390:web:fdf6eed752a81f99bbfc97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)