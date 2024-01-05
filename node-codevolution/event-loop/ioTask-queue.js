const fs = require("fs");

//Experiment 1
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1"));

//Experiment 2

/*
Note: setTimeout callback with 0ms delay may sometimes execute after IO queue callback this happens cause the V8 Engine add 1ms delay under the hood for setTimeout, as a result of that IO callback is added to queue before setTimeout callback.
*/

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })


// Experiment 3

fs.readFile(__filename, () => {
    console.log("this is readFile 1")
})

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for(let i = 0; i < 2000000000; i++){} 
// For loop added to make sure setTimeout callback is added to queue before event loop runs.
