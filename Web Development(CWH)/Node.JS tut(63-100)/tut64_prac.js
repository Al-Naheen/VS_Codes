const fs = require("fs");
let text = fs.readFileSync('dele.txt','utf-8')
let text2 = text.replace("best", "naheen")
// console.log( text.slice(2,8))
// console.log( text.repeat(2))
// console.log( text.toUpperCase())
// console.log( Number.isInteger(text[1]))
// console.log(text.charAt(0));
console.log(text[2]);

console.log('Niche dekh.....');
console.log(text);

console.log(`Creating..${text2}`);
fs.writeFileSync('dele_2.txt', text2)
