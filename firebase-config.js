// firebase-config.js
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// 🔁 Replace this config with your actual Firebase project's config
const firebaseConfig = {// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_0X9PDWpc0YlRcmS6noNzOg_fYTkRHk",
  authDomain: "phx-airdrop.firebaseapp.com",
  projectId: "phx-airdrop",
  storageBucket: "phx-airdrop.firebasestorage.app",
  messagingSenderId: "539552570976",
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, onAuthStateChanged };
