import {
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import { auth } from "./firebase-config.js";
import { provider } from "./auth.js";

const loginBtn = document.getElementById("gloginBtn");

if(loginBtn) {
    loginBtn.addEventListener("click", async () => {
        try {
            await signInWithPopup(auth, provider);
            window.location.href = "/home.html";
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        }
    })
}   