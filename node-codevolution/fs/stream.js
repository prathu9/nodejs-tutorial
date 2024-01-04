const fs = require("node:fs");

const createReadStream = fs.createReadStream("./fs/file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

const createWriteStream = fs.createWriteStream("./fs/file2.txt");

createReadStream.on("data", (chunk) => {
    console.log("chunk", chunk);
    createWriteStream.write(chunk);
})

