// create a small HTTP server using the http module
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((_request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
