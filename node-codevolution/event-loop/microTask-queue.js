console.log("this is console.log 1");
process.nextTick(() => console.log("this is process.nextTick 1"));
console.log("this is console.log 2");


Promise.resolve().then(() => console.log("this is promise 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));


process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => console.log("this is nextTick inside nextTick"));
});
process.nextTick(() => console.log("this is process.nextTick 3"));


Promise.resolve().then(() => console.log("this is promise 1"));
Promise.resolve().then(() => {
    console.log("this is promise 2");
    process.nextTick(() => console.log("this is nextTick inside promise"));
});
Promise.resolve().then(() => console.log("this is promise 3"));
