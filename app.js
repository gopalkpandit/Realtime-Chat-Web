// app.js
import { auth, db, ref, set, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

// REGISTER
document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const user = userCred.user;
      set(ref(db, "users/" + user.uid), {
        email: email,
        online: true
      });
      alert("✅ Account created! Now login.");
    })
    .catch(err => alert(err.message));
});

// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const user = userCred.user;
      set(ref(db, "users/" + user.uid), {
        email: email,
        online: true
      });
      alert("🎉 Login successful!");
      window.location = "chat.html";
    })
    .catch(err => alert(err.message));
});