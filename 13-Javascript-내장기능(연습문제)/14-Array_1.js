
const data = [ 10, 20, 30, 40, 50 ];

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
//  배열의 맨 끝에 요소 추가
data.push(60,70);
console.log(data);

//  마지막 요소 리턴하고 제거
const k = data.pop();
console.log(k);
console.log(data);

//  맨 앞 요소 리턴하고 제거
const x = data.shift();
console.log(x);
console.log(data);

//  맨 앞 요소 추가
data.unshift(0, 10);
console.log(data);
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

//  2번째 위치부터 3개를 잘라서 반환하고 원본에서는 제거 *****
const z = data.splice(2,3);
console.log(z);
console.log(data);

//  0번째 위치부터 2개 제거하고 그 위치에 다른 요소 배치
//  제거한 수 < 추가한 수  ->  배열이 확장된다,  기존의 원소들은 뒤로 밀린다
//  제거한 수 > 추가한 수  ->  배열이 축소된다
data.splice(0,2,'a','b','c');
console.log(data);

//  삭제할 원소의 수를 0으로 하면 중간 삽입 효과가 있다
data.splice(3,0,'d','e');  //  ->  3위치 직전에 삽입된다  [0][1][2]^[3]
console.log(data);
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

//  a에 b,c 결합한 새로운 배열 반환
const a = [1,2];
const b = [3,4,5];
const c = [6,7,8,9];
const d = a.concat(b,c);
console.log(d);
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

//  배열에서 원하는 원소가 있는지
let arr1 = [1,0,false,2,5,8];

console.log( arr1.indexOf(0) );         //  1
console.log( arr1.indexOf(false) );     //  2
console.log( arr1.indexOf(null) );      //  -1

console.log( arr1.includes(1) );        //  true
console.log( arr1.includes(100) );      //  false

//console.log( arr1.indexOf(false,1) );       //  4  <-  2

//  indexOf 메서드는 요소 찾을 때 완전항등연산자(===)를 사용한다
const arr2 = [NaN];
console.log( arr2.indexOf(NaN) );       //  -1  <-  NaN에는 완전항등비교 동작X -> 없는것으로간주
console.log( arr2.includes(NaN) );      //  true
