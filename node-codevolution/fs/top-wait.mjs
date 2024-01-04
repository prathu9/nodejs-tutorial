import {readFile, writeFile} from "fs/promises";

await writeFile("./hello.txt", "Hello world");

const text = await readFile("./hello.txt", "utf-8")

console.log(text);