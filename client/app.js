let text = document.querySelector("#chat");
let sendButton = document.querySelector("#sendButton");
let textMessage = document.querySelector("#textMessage");

// Se utiliza WebSocket
const socket = new WebSocket("ws://localhost:4000");

// // escuchar mensajes (.onEVENT property)
// socket.onmessage = ({ data }) => {
//     const d = document.createElement("div");
//     const t = document.createTextNode(data);
//     d.appendChild(t);
//     text.appendChild(d);
// };

// socket.onopen = (event) => {
//     console.log(event);
// };

// sendButton.addEventListener("click" , () => {
//     socket.send(textMessage.value);
// });

//escuchar mensajes (event listener)
socket.addEventListener("message", ({ data }) => {
    const d = document.createElement("div");
    const t = document.createTextNode(data);
    d.appendChild(t);
    text.appendChild(d);
});

socket.addEventListener("open", (event) => {
    console.log(event);
});

sendButton.onclick = () => {
    socket.send(textMessage.value);
};
