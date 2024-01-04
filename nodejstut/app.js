const {createWriteStream} = require("fs");

const file = createWriteStream("./big.txt");

for(let i = 0; i < 1e8; i++){
    file.write("Hello world\n");
}

file.end(() => {
    console.log("write complete");
})
