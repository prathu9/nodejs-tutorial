const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    const html = fs.createReadStream(__dirname+"/index.html").pipe(res);
})

server.listen(3000, () => {
    console.log(`Open http://localhost:3000`)
})