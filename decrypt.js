let encrypt = function (cliphertext, password) {

    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', password);

    try {
        let decrypted = decipher.update(cliphertext, 'hex', 'utf8');

        try {
            decrypted += decipher.final('utf8');
            console.log(`Der wieder entschlüsselte Text lautet:
${decrypted}`);

        } catch {
            console.error('Authentication failed! Wrong password!');
        }

    } catch {
        console.log("Wrong HASH-Code")
    }

};

module.exports = encrypt;