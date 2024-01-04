const http = require("http");
const {readFileSync} = require("fs");

const homePage = readFileSync("./index.html");
const homeStyle = readFileSync("./styles.css");
const coverImg = readFileSync("./landscape.jpg");

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === "/"){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(homePage);
    }
    else if(url === "/styles.css"){
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(homeStyle);
    }
    else if(url === "/landscape.jpg"){
        res.writeHead(200, {'content-type': 'image/jpeg'});
        res.end(coverImg);
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }
})

server.listen(5000, () => {
    console.log("Open: http://localhost:5000");
})