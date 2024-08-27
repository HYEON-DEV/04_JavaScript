
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//  고전적 방법 - 반복문으로 배열 원소 탐색
const arr1 = [ 10, 20, 30, 40, 50 ];

for ( let i=0; i<arr1.length; i++ ) {
    if ( i == 3 ) {
        console.log('--- 반복중단 ---');
        break;
    }
    console.log(`${i}번째 원소 ==> ${arr1[i]}`);
}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//  forEach 메서드로 배열의 모든 원소 탐색
//  콜백함수에게 배열의 값과 인덱스 전달
//  콜백함수는 원소의 수만큼 순차적으로 실행된다

//  원소의 갯수만큼 콜백함수가 반복된다
//  배열의 모든원소를 탐색

//  for문은 동기 처리 ( 0번째탐색 -> 1번째탐색 -> 2번째탐색 ..... )
//  JS 의 콜백함수는 다 비동기처리라고 보면 된다 (0,1,2,3,...번째 한꺼번에 동시탐색)
//  동시다발적으로 처리된다 -> 실행속도가 빠르다,  forEach 는 중간에 멈출 수 있는 방법이 없다

const arr2 = [ 10, 20, 30, 40, 50 ];

arr2.forEach( ( v, i ) => {         //  parm1 <- 배열의 원소 값,   parm2 <- 배열의 인덱스
    if ( i == 3 ) {
        console.log('---반복중단---');
        return;                     //  forEach의 콜백함수에서 반복을 중단하고자 return을 사용해도, 동작중인 콜백만 종료되고 전체 반복에는 영향이 없다
    }
    console.log(`${i}번째 원소 ==> ${v}`);
} );

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//  some 메서드   탐색을 중단하는 기능 제공
//  콜백함수가 true 리턴하는 순간 전체 반복 중단 

const arr3 = [ 10, 20, 30, 40, 50 ];

arr3.some( (v,i) => {
    if (i==3) {
        console.log('---반복중단---');
        return true;
    }
    console.log(`${i}번째 원소 ==> ${v}`);
} );


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//  map 메서드
//  원본 배열을 가공해서 새로운 배열 만들때
//  콜백함수가 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
//  hello는 반드시 원본 배열과 같은 길이를 갖는 배열이다
//  리턴하지 않은 index에 대한 원소는 undefined가 된다

//  콜백을 돌리므로 배열의 원소갯수만큼 반복이 실행된다

const arr4 = [ 10, 20, 30, 40, 50 ];
const hello = arr4.map( (v,i) => {
    return v*10;
} );
console.log(hello);

//  처리로직이 한줄이므로 생략가능 (  {}, ;, return키워드  )
const arr5 = [ 10, 20, 30, 40, 50 ];
const world = arr5.map( (v,i) => v*10 );
console.log(world);

//  이전 예제 문제 이렇게 줄일 수 있다!!
const k = [true,false,true,false,false];
const x = k.map( (v,i) => !v );
console.log(x);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//  배열검색
//  find 메서드
//  주어진 판별함수를 만족하는 첫번째 값 리턴,  못찾으면 undefined 리턴

const arr6 = [5,12,8,131,44];

const found1 = arr6.find( (v) => {       //  파라미터 항상 v,i 받는데 불필요시 생략가능
    console.log(`v=${v}`);

    if (v%2==0) { 
        return true; 
    }
    else { 
        return false; 
    }
} );

console.log(found1);

//  v%2==0 -> 참  ==>  코드를 줄일 수 있다  * * * * *
const arr7 = [5,12,8,131,44];

const found2 = arr7.find( v => (v%2==0) );

console.log(found2);


//  배열에서 특정 조건을 충족하는 원소 추출하기

//  1)  전통적인 방법 -- -- -- -- -- -- -- -- -- -- 
const arr8 = [5,12,8,131,44];
const d1 = [];
for ( let i=0; i<arr8.length; i++ ) {
    if( arr8[i]%2 == 0 ) {
        d1.push(arr8[i]);
    }
}
console.log(d1);

//  2)  forEach -- -- -- -- -- -- -- -- -- -- 
const arr9 = [5,12,8,131,44];
const d2 = [];
arr9.forEach( (v,i) => {
    if( v%2 == 0 ){
        d2.push(v);
    }    
} );
console.log(d2);

