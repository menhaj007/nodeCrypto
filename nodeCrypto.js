const {createHash} = require("crypto");

function hash(input) {
    //argon2
    return createHash("sha256").update(input).digest("hex");

}
let password = 'helloworld';
const hash1 = hash(password);
console.log(hash1);
