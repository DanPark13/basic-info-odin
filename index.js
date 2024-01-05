const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;

    switch (pathname) {
        case '/':
            pathname = "/index.html";
            break;
        case '/about':
            pathname = "/about.html";
            break;
        case '/contact-me':
            pathname = "/contact-me.html";
            break;
        default:
            pathname = "/404.html";
    }

    fs.readFile(__dirname + pathname, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "txt/html"});
            res.end("404 Not Found");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    });
}).listen(8080);

console.log("Server running at http://localhost:8080/")