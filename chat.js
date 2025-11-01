// chat.js
import { auth, db, ref, set, update, push, onValue, signOut, onAuthStateChanged } from "./firebase.js";

let currentUser = null;
let currentChatUser = null;

// ✅ Check Login
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
    loadUsers();
  } else {
    window.location = "index.html";
  }
});

// 🚪 Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  update(ref(db, "users/" + currentUser.uid), { online: false });
  signOut(auth).then(() => window.location = "index.html");
});

// 👥 Load Users
function loadUsers() {
  const list = document.getElementById("userList");
  onValue(ref(db, "users"), (snapshot) => {
    list.innerHTML = "";
    snapshot.forEach((child) => {
      const data = child.val();
      if (data.email !== currentUser.email && data.online) {
        const li = document.createElement("li");
        li.textContent = data.email;
        li.onclick = () => openChat(data.email);
        list.appendChild(li);
      }
    });
  });
}

// 💬 Open Chat
function openChat(email) {
  currentChatUser = email;
  document.getElementById("chatWith").textContent = "Chat with: " + email;
  document.getElementById("msgArea").style.display = "flex";
  loadMessages();
}

// ✉️ Send Message
document.getElementById("sendBtn").addEventListener("click", () => {
  const text = document.getElementById("msgInput").value.trim();
  if (!text) return;

  push(ref(db, "messages"), {
    sender: currentUser.email,
    receiver: currentChatUser,
    text,
    time: new Date().toLocaleTimeString()
  });

  document.getElementById("msgInput").value = "";
});

// 📩 Load Messages
function loadMessages() {
  const msgDiv = document.getElementById("messages");
  msgDiv.innerHTML = "";

  onValue(ref(db, "messages"), (snapshot) => {
    msgDiv.innerHTML = "";
    snapshot.forEach((child) => {
      const msg = child.val();
      if (
        (msg.sender === currentUser.email && msg.receiver === currentChatUser) ||
        (msg.sender === currentChatUser && msg.receiver === currentUser.email)
      ) {
        const div = document.createElement("div");
        div.textContent = `${msg.sender}: ${msg.text} (${msg.time})`;
        msgDiv.appendChild(div);
        msgDiv.scrollTop = msgDiv.scrollHeight;
      }
    });
  });
}