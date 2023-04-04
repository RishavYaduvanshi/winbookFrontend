

let sock = null;

export function getShowableText(text) {
  text = (text + " ").replace(
    /(#.+?)\b/g,
    '<span style="color:#1976d2;">$1 </span>'
  );
  // console.log(text);
  return text;
}

export function createRSAKeyPair() {
  //TODO: creates a pair of RSA keys
}

export function encryptRSA() {
  //TODO : encrypts a message using RSA
}

export function decryptRSA() {
  //TODO : decrypts a message using RSA
}

export function encryptAES() {
  //TODO : encrypts a message using AES
}

export function decryptAES() {
  //TODO : decrypts a message using AES
}

export function getHash() {
  //TODO : generates a hash of a message
}

export function getSignature() {
  //TODO : generates a signature of a message
}

export function verifySignature() {
  //TODO : verifies a signature of a message
}

export async function getChatList() {
  const res = await fetch("https://winbookbackend.d3m0n1k.engineer/message/get_chats/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Token " + localStorage.getItem("authtoken"),
    }
  });
  const data = await res.json();
  return data;
}

export async function getChatMessages(pk, page) {
  const res = await fetch("https://winbookbackend.d3m0n1k.engineer/message/" + pk + "/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Token " + localStorage.getItem("authtoken"),
    },
  });
  const data = await res.json();
  return data;
}

export async function getDetails(username) {
  if (username === undefined) return;
  else if (username === "new") return;
  else {
    const res = await fetch('https://winbookbackend.d3m0n1k.engineer/user/f/' + username + '/')
    const data = await res.json();
    return data;
  }
}

export async function sockConnect() {
  const sock = new WebSocket(
    "wss://winbookbackend.d3m0n1k.engineer/ws/chat/?" +
    localStorage.getItem("authtoken")
  );
  sock.onmessage = function (e) {
    const data = JSON.parse(e.data);
    return data;
    //use this method to update the messages in a chat window
  };
  sock.onopen = sock.onmessage;
  sock.onerror = sock.onmessage;
  sock.onclose = sock.onmessage;
  return sock;
}

export function getSock() {
  if (sock === null) {
    sock = sockConnect();
  }
  return sock;
}

// sock.send(`{
// 	"handler": "message",
// 	"body": {
// 		"to_user": "2",
// 		"message": "Hello"
// 	}
// }`)
