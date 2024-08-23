
//  화살표 함수

const foo = (x) => {
    for ( let i=0; i<x; i++ ) {
        console.log('hyeon');
    }
};
foo(7);



//  파라미터가 하나만 존재할 경우 소괄호 생략가능
const bar = x => {
    for ( let i=0; i<x; i++ ) {
        console.log('hyeon');
    }
};
bar(5);



//  처리 로직이 한 줄만 존재하는 경우
//  파라미터 x,y 를 받아서 x+y 를 리턴하는 arrowReturn 이라는 이름의 함수
const plus = (x,y) => x+y;
console.log(plus(100,400));

