import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDtIq0rcI8HccJ-erl4uNIyMbllFQ8zA",
  authDomain: "ayurva-f1907.firebaseapp.com",
  projectId: "ayurva-f1907",
  storageBucket: "ayurva-f1907.appspot.com", // Fixed storage bucket domain
  messagingSenderId: "1000016133935",
  appId: "1:1000016133935:web:3eb8c7f8cb59a8869eabda",
  measurementId: "G-ZXT4X47J15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Pass 'app' to getFirest


export { app, db };  // Named exports
