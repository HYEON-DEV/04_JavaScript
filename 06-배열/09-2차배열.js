const c = new Array(10,20,30);
const d = new Array(50,60,70);
const myArr3 = new Array(c,d);
console.log(myArr3);

const myArr4 = new Array( new Array(10,20,30), new Array(50,60,70) );
console.log(myArr4);
