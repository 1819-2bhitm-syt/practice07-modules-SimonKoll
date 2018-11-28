const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

console.log("***Verschlüsselung***");
console.log();

let text = "Das ist ein Text!";
let password = "rofl";

const cliphertext = encrypt(text, password);
console.log();
decrypt(cliphertext, password);