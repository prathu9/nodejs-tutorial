/// Microtask queue

//nextTick queue

process.nextTick(() => {
    console.log("this is process.nextTick");
});


//Promise queue

Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
})


/// Non MicroTask queue

//Timer queue
 setTimeout(() => {
    console.log("this is timeout 1")
 }, 0);

 //IO queue
 const fs = require("fs");
 fs.readFile(__filename, () => {
    console.log("this is readfile 1");
 })

 //Check queue
 setImmediate(() => {
    console.log("this is setImmediate 1");
 })
