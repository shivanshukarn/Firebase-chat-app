let messages;
let msgKey;
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  window.scrollTo(0,document.body.scrollHeight);
  messages = snapshot.val();
  msgKey = snapshot.key;
  const msg = `<div class="card mt-2 ms-2 text-white bg-dark msgDiv" style="width: 18rem; border: 2px solid #fff;" id="${msgKey}" key="${msgKey}">
  <div class="card-body">
    <h5 class="card-title">${messages.usr}</h5>
    <p class="card-text">${messages.msg}</p>
    <button class="btn btn-primary" onclick="reply()">Reply</button>
  </div>
</div>`
  document.getElementById("messages").innerHTML += msg;
});