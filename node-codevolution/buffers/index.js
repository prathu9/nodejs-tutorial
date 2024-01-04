const buffer = new Buffer.from('Prathamesh');

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());

buffer.write("shweta");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());