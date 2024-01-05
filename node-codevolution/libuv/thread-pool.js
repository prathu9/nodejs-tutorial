const crypto = require("crypto");
const https = require("https");

const MAX_CALLS = 5;

//Increase number of thread
//process.env.UV_THREADPOOL_SIZE = 5; //increasing this number improves performance but limited to CPU core

let start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 10, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start);
//     })
// }

for(let i = 0; i < MAX_CALLS; i++){
   https.request("https://google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
        console.log(`Request: ${ i + 1 }`, Date.now() - start);
    })
   })
   .end();
}