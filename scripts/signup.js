import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import { auth } from "./firebase-config.js";
import { provider } from "./auth.js";

const gloginBtn = document.getElementById("gloginBtn");
const emailInput = document.getElementById("signupEmail");
const passwordInput = document.getElementById("signupPassword");
const signupBtn = document.getElementById("signup-btn");
const nameInput = document.getElementById("signupName");

if(gloginBtn) {
    gloginBtn.addEventListener("click", async () => {
        try {
            await signInWithPopup(auth, provider);
            window.location.href = "/home.html";
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        }
    }); 
}   

if(signupBtn) {
    signupBtn.addEventListener("click", async () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        try {
            const userCredential = 
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                );
            await updateProfile(userCredential.user, {
                displayName: name
            });

            window.location.href = "/home.html";
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    });
}