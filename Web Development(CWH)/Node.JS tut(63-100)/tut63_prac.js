console.log("I am Naheen");

const http = require('http');

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    `<h1>Hello World with Naheen Bhai</h1>
  <pre>Kutttar BaccccchA`);
});

server.listen(port, hostname, () => {
  console.log(`Ei neo Tmr Garbage http://${hostname}:${port}/`);
});