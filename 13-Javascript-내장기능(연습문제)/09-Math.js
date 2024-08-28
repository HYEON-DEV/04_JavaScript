
//  Math 수학적 속성, 메서드 가진 내장객체
//  객체 생성을 하지 않고 클래스 이름으로 직접 접근한다

var max = Math.max(100, 456, 123, 1000, 789);
var min = Math.min(100, 456, 123, 1000, 789);
console.log(`최댓값 : ${max}`);
console.log(`최솟값 : ${min}`);

/* 
const arr = [10,50,30,40,60];
const [...k] = arr;
console.log( Math.max(...k) );
 */

var num1 = 3.7146;
console.log(`소수점 반올림 : ${Math.round(num1)}`);
console.log(`소수점 올림 : ${Math.ceil(num1)}`);
console.log(`소수점 내림 : ${Math.floor(num1)}`);

var num2 = -123;
console.log(`절댓값 : ${Math.abs(num2)}`);

console.log(`난수 : ${Math.random()}`);



function random(n1,n2) {
    return parseInt( Math.random() * (n2-n1+1) + n1 );
}

var rnd = random(0,9);
console.log(`0-9 사이의 난수 : ${rnd}`);


var auth = '';
for ( var i=0; i<10; i++ ) {
    auth += random(0, 9);
}
console.log(`인증번호 : ${auth}`);

