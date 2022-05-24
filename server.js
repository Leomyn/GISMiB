const http = require("http");

const hostname = "127.0.0.1"; // localhost
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200,
    response.setHeader("Content-Type", "text/plain");
    response.getHeader("Acces-Control-Allow-Origin", "*");
    response.write("mulm");
});

server.listen(port, hostname, () => {
    console.log("Server start");
});