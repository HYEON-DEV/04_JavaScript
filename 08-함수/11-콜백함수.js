
//  콜백함수를 파라미터로 요구하는 함수

function something( x, y, cb ) {
    const result = cb( x, y );
    console.group(cb);
    console.log(`${x}와 ${y}의 연산 결과는 ${result}`);
    console.groupEnd();
}


//  콜백함수 유형 1  - 직접 함수 정의
function plus(a,b) { return a+b; }
function minus(a,b) { return a-b; }

something(100, 50, plus);
something(100, 50, minus);


//  콜백함수 유형 2  - 콜백함수를 익명함수 형태로 전달
something( 200, 100, function(a,b) {
    return a*b;
} );
something( 200, 100, function(a,b) {
    return a/b;
} );


//  콜백함수 유형 3  - 익명함수를 화살표 함수로
something( 5, 7, (a,b) => {
    for ( let i=a; i<b; i++) {
        console.log(`7 x ${i} = ${7*i}`);
    }
} );
