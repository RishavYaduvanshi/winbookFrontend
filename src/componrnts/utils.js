

export function getShowableText(text) {

    text = (text + " ").replace(/(#.+?)\b/g, '<span style="color:#1976d2;">$1 </span>');
    // console.log(text);
    return text
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
