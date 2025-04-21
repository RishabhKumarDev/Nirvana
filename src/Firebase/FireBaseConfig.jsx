// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXWRruln3xnKOn_toeBUp0DdOD0MfIGe8",
  authDomain: "nirvana-journal.firebaseapp.com",
  projectId: "nirvana-journal",
  storageBucket: "nirvana-journal.firebasestorage.app",
  messagingSenderId: "849465974371",
  appId: "1:849465974371:web:2ee2929dabee5f71372256"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)