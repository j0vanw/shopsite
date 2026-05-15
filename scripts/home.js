import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js"

import { auth } from "./firebase-config.js";
import { logout } from "./auth.js";

const guestUI = document.getElementById("guestUI");
const userUI =  document.getElementById("userUI");
const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
    if(user) {
        guestUI.style.display = "none";
        userUI.style.display = "flex";

        userInfo.textContent = `${user.displayName}`;
    } else {
        guestUI.style.display = "flex";
        userUI.style.display = "none";
    }
});

if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
}
