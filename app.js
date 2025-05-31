import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Replace this config with your actual Firebase values
const firebaseConfig = {
  apiKey: "AIzaSyDE_OX9PDWpcOYlRcmS6noNzOg_fYTkRHk",
  authDomain: "phx-airdrop.firebaseapp.com",
  projectId: "phx-airdrop",
  storageBucket: "phx-airdrop.appspot.com",
  messagingSenderId: "539552570976"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("login").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    document.getElementById("output").innerText = `Welcome, ${result.user.displayName}`;
  } catch (error) {
    console.error(error);
    document.getElementById("output").innerText = "Login failed.";
  }
});
