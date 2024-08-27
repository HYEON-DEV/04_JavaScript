
//  실수 리턴,      but 변환불가 -> NaN 리턴

console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));

console.log(parseFloat('FF2'));
console.log(parseFloat(true));
