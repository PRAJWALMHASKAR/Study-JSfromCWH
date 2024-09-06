const { reverse } = require('dns');

const prompt = require('prompt-sync')();

let arr = [13, 56, 33];

let a = arr.map((value, index, array)=>{
  //console.log(value, index, array);
  return value + 1;
})

//console.log(a);

let b = arr.filter((value)=>{
  return value<50;
})

//console.log(b);

let c = arr.reduce((h1, h2)=>{
  return h1 + h2;
})

console.log(c);

console.log(arr);