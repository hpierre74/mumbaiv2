const CryptoJS = require('crypto-js');

const encryptString = (string, key) => CryptoJS.AES.encrypt(string, key).toString();
const decryptHash = (hash, key) => CryptoJS.AES.decrypt(hash, key).toString(CryptoJS.enc.Utf8);

module.exports = { encryptString, decryptHash };
