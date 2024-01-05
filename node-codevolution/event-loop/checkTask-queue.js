const fs = require("fs");

//Experiment 1
//Note: After executing IO queue callback event loop execute callbacks in microtask queue and then move on to check queue

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is setImmediate inside readFile"));
//     process.nextTick(() => console.log("this is process.nextTick inside readFile"));
//     Promise.resolve().then(() => console.log("this is promise inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));


// Experiment 2
//Note: MicroTask queues are executed between setImmediate callbacks

// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//     console.log("this is setImmediate 2");
//     process.nextTick(() => console.log("this is process.nextTick inside setImmediate"));
//     Promise.resolve().then(() => console.log("this is promise inside setImmediate"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));


//Experiment 3
//Note: When running setTimeout with delay 0ms and setImmediate method, the order of execution can never be guaranteed

// setTimeout(() => console.log("this is timeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));