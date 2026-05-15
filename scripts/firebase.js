import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCAUb1cWLN4aXA_9Ziv1RshAmojgorFVoQ",
  authDomain: "j0vanw-9deec.firebaseapp.com",
  projectId: "j0vanw-9deec",
  storageBucket: "j0vanw-9deec.firebasestorage.app",
  messagingSenderId: "870061832511",
  appId: "1:870061832511:web:113538eb2c5455cefcbb8a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("gloginBtn");
const logoutBtn = document.getElementById("glogoutBtn");
const userInfo = document.getElementById("userInfo");

loginBtn.addEventListener("click", async () => {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Login error:", error);
        alert(error.message);
    }
});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        userInfo.textContent = `Logged in as ${user.displayName}`;
    } else {
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        userInfo.textContent = "";
    }
});