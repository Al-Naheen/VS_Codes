const fs = require("fs");
let text = fs.readFileSync('hagu.txt','utf-8')
let text2 = text.replace("hagu", "naheen")

console.log('Niche dekh.....');
console.log(text);

console.log('Creating a baaaal file..');
fs.writeFileSync('dele2.txt', text2)
