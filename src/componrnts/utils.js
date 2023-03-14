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

export function getChatList() {
  fetch("https://winbookbackend.d3m0n1k.engineer/message/get_chats/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Token " + localStorage.getItem("authtoken"),
    },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then((data) => {
        console.log(data);
        //TODO : use data to populate the chat list
      });
    }
  });
}

export function getChatMessages(pk, page) {
  fetch("https://winbookbackend.d3m0n1k.engineer/message/" + pk + "/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Token " + localStorage.getItem("authtoken"),
    },
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then((data) => {
        console.log(data);
        //TODO : use data to populate the chat messages
      });
    }
  });
}
