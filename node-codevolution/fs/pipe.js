const fs = require("node:fs");
const zlib = require("node:zlib");

const readStream = fs.createReadStream("./fs/file1.txt", {
    encoding: "utf-8"
});

const writeStream = fs.createWriteStream("./fs/file2.txt");

readStream.pipe(writeStream);

// chaining pipe
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(fs.WriteStream("./fs/file.txt.gz"))
