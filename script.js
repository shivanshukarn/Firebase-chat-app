const username = prompt("What's your name?");
const password = prompt("Enter the password")
// let username = "Shivanshu"
// let password = "jschat"

const delbtn = document.getElementById('delbtn')

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

function reply() {
  document.getElementById("chat-txt").value = ("(Reply:" + messages.msg + ")") + "  -  ";
  document.getElementById("chat-txt").focus();
}
delbtn.addEventListener('click', () => {
  // console.log("Clicked on delete message")
  db.ref('messages/').remove()
  document.getElementById("messages").innerHTML = ""
})

let Statusty;
let Status;
let StatusMsg;
if (username === null || username === "" || username === undefined || password != "jschat"){
  Statusty = "danger"
  Status = "Danger"
  StatusMsg = "Username invalid"
  document.getElementById("send-message").style.display = "none"
  alert("You can't chat without USERNAME ; click ok , refresh the page and type username")
}else{
  Statusty = "success"
  Status = "Online"
  StatusMsg = "Username : " + username
}

document.getElementById('status').innerHTML = `<div class="card bg-${Statusty}">
<div class="card-body text-white p-1 d-flex">
  <p class="m-1">${StatusMsg} </p>
  <p class="m-1"> | </p>
  <p class="m-1">Status : ${Status}</p>
</div>
</div>`