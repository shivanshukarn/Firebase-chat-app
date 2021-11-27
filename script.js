 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCrpgFvJN-i4ViKGhTbGyu9_OKJCsy56uE",
  authDomain: "fire-chat-app-0a8.firebaseapp.com",
  projectId: "fire-chat-app-0a8",
  storageBucket: "fire-chat-app-0a8.appspot.com",
  messagingSenderId: "901787133958",
  appId: "1:901787133958:web:aa404651e4ec15d0d9fb87"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const username = prompt("What's your name?");

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  window.scrollTo(0,document.body.scrollHeight);
  const messages = snapshot.val();
  // const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
  // const usrnm = messages.usr;
  // let usrmsg = messages.msg;
  const msg = `<div class="card mt-2 ms-2 text-white bg-dark" style="width: 18rem; border: 2px solid #fff;">
  <div class="card-body">
    <h5 class="card-title">${messages.usr}</h5>
    <p class="card-text">${messages.msg}</p>
    <button class="btn btn-primary" onclick="reply()">Reply</button>
  </div>
</div>`
  document.getElementById("messages").innerHTML += msg;

});

function reply() {
  // console.log("Reply")
  // console.log("Reply:" + messages.msg + "    - ")
  // document.getElementById("chat-txt").value = `("Reply:" + ${messages.msg})` + "    - ";
  document.getElementById("chat-txt").value = "Reply:" + "  ";
  document.getElementById("chat-txt").focus();
}