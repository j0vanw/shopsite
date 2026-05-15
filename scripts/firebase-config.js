import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import { 
  getAuth,
  setPersistence,
  browserSessionPersistence,
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

export const auth = getAuth(app)

await setPersistence(auth, browserSessionPersistence);