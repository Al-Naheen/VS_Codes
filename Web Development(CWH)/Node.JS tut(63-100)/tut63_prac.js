console.log("I am Naheen");

const http = require('http');
const fs = require('fs')

//File System
let read = fs.readFileSync('dele.txt', 'utf-8')
let replace = read.replace('wanna', 'baaaaaaaal hobo')
console.log(read);
console.log(`the changed content is : ${replace}`);
fs.writeFileSync('changedDele.txt', replace)
fs.writeFileSync('changedDele_2.txt', `tmi marra khao`)

//purata Change korsi
const hostname = '127.0.0.1';
const port = 3000;


//HTTP--> Purata change korsi
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader( 'Content-type', 'html');
  res.end(
    `<h1>Hello World with Naheen Bhai</h1>
  <pre>Kutttar BaccccchA</pre>
  <h2>actual content is:<br> ${read} <br>the changed content is below : <br>${replace}`);
});

server.listen(port, hostname, () => {
  console.log(`Ei neo Tmr Garbage http://${hostname}:${port}/`);
});