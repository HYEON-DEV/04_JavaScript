
//  Number  내장 클래스
//  클래스와 함수 구별

const k = '123';
console.log( typeof parseInt(k) );
console.log( typeof parseFloat(k) );


//  객체 생성
var a = new Number (123);
console.log(a);
console.log(typeof a);
console.log(a == 123);      // true
console.log(a === 123);     // false


//  Number() 함수를 통해 반환받는 값은  객체가 아닌 숫자
//  Number() 함수는  parseFloat, parseInt 와 비슷한 기능
var b = Number('123');
console.log(b);
console.log( typeof b );
console.log( b === 123.45 );


//  표현 가능한 가장 큰 양수
console.log(Number.MAX_VALUE);
//  표현 가능한 가장 작은 양수
console.log(Number.MIN_VALUE);


//  숫자가 아님을 나타내는 특별한 값
console.log(Number.NaN);
console.log( isNaN(Number.NaN) );   //  NaN이 맞나요? -> yes -> true

//  isNaN 과 동일
//  숫자 변환이 불가능하면 true, 가능하면 false
console.log(Number.isNaN('123'));   // 숫자변환가능 -> false
console.log(Number.isInteger('123'));   //  -> false
console.log(Number.parseFloat('123'));