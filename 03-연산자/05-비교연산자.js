let x = 100;
let y = 50;

let compare1 = x >= y;      // true
let compare2 = x > y;       // true
let compare3 = x <= y;      // false
let compare4 = x < y;       // false

console.group(" 1) 이상, 이하, 미만, 초과 ");
console.log(compare1);
console.log(compare2);
console.log(compare3);
console.log(compare4);
console.groupEnd();


let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.log(a1 === a2);     // false
console.log(a1 === a3);     // false
console.log(a1 === a4);     // false

