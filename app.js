import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your real Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID"
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
