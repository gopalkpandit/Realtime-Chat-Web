/*
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBcGg0wTwcfo36r0Xeg8wXnTJw-tuFGlI",
    authDomain: "chat-app-07gp.firebaseapp.com",
    projectId: "chat-app-07gp",
    storageBucket: "chat-app-07gp.firebasestorage.app",
    messagingSenderId: "966131962733",
    appId: "1:966131962733:web:f8e48115255e8c35f2c064",
    measurementId: "G-6XER1TPBXZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  */
  /*
  // Firebase v10 modular import syntax
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBcGg0wTwcfo36r0Xeg8wXnTJw-tuFGlI",
  authDomain: "chat-app-07gp.firebaseapp.com",
  projectId: "chat-app-07gp",
  databaseURL: "https://chat-app-07gp-default-rtdb.firebaseio.com/",
  storageBucket: "chat-app-07gp.firebasestorage.app",
  messagingSenderId: "966131962733",
  appId: "1:966131962733:web:f8e48115255e8c35f2c064"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
*/
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getDatabase, 
  ref, 
  set, 
  update, 
  push, 
  onValue 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔥 Apna config yahan lagao
const firebaseConfig = {
  apiKey: "AIzaSyDBcGg0wTwcfo36r0Xeg8wXnTJw-tuFGlI",
  authDomain: "chat-app-07gp.firebaseapp.com",
  projectId: "chat-app-07gp",
  databaseURL: "https://chat-app-07gp-default-rtdb.firebaseio.com/",
  storageBucket: "chat-app-07gp.firebasestorage.app",
  messagingSenderId: "966131962733",
  appId: "1:966131962733:web:f8e48115255e8c35f2c064"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, ref, set, update, push, onValue, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword };