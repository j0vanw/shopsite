import {
    GoogleAuthProvider,
    signOut,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js"

import { auth } from "./firebase-config.js"

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export async function logout() {
    await signOut(auth);
}