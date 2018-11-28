

let encrypt = function (plaintext, password) {

    const crypto = require("crypto");
    const cipher = crypto.createCipher('aes192', password);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(`Der verschlüsselte Text lautet:
${encrypted}`);
    return encrypted;

};

module.exports = encrypt;