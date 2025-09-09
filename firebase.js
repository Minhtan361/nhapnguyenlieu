// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIqzq1vh-Kqb5bA9fPuOw4QU_l3zODmOY",
  authDomain: "nguyenlieu-45afc.firebaseapp.com",
  projectId: "nguyenlieu-45afc",
  storageBucket: "nguyenlieu-45afc.firebasestorage.app",
  messagingSenderId: "502474199189",
  appId: "1:502474199189:web:8c05b3f568283d903f8b9c",
  measurementId: "G-GTHW6WNG5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);