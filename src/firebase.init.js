// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZquUMB0wHE1DLJjbikCC1gK_8ZcLKYP0",
  authDomain: "auth-project-8d771.firebaseapp.com",
  projectId: "auth-project-8d771",
  storageBucket: "auth-project-8d771.firebasestorage.app",
  messagingSenderId: "173467395844",
  appId: "1:173467395844:web:353aaaf935fe4c46c3d251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);