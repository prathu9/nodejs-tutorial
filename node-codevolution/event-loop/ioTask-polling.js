// Polling
/*IO events are polled and callback functions are added to the IO queue only after the IO is complete */

const fs = require("fs");

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
})

process.nextTick(() => console.log("this is nextTick 1"));
Promise.resolve().then(() => console.log("this is promise 1"));
setImmediate(() => console.log("this is setImmediate 1")); 

//Note: Even though IO queue runs before check queue, here setImmediate will run before readFile cuz readFile callback is added to IO queue only after polling which happens between IO queue and check queue, 
//So when IO queue is run first time there is no callback, after polling it adds callback to IO queue and move on to check queue execute setImmediate callback and then after event loop return to IO queue it executes readFile callback.