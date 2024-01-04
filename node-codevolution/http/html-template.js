const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    const name = "Alice";
    let html = fs.readFileSync(__dirname+"/template.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
})

server.listen(3000, () => {
    console.log(`Open template http://localhost:3000`)
})