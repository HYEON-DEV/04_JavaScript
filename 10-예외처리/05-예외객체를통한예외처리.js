
//  에러 객체를 활용한 예외처리
function foo ( id, pw ) {
    if ( !id ) {
        //  함수 안에서 에러 -> 함수를 호출하는 위치를 에러로 인식
        throw new Error('아이디를 입력하세요');
    }
    if ( !pw ) {
        throw new Error('비밀번호를 입력하세요');
    }
    return '로그인 완료';
}

let a = null;
let b = null;
/*
//  try 블록은 최소화 하는 것이 프로그램 효율에 좋다
//  결과값을 활용하는 처리는 try 블록 밖에서 하는 것이 좋다
//  try 블록보다 상위에 변수 선언해야 한다  ->  변수의 스코프 규칙
try {
    a = foo( '', '1234' );
} catch (err) {
    console.log(`에러이름 : ${err.name}`);
    console.log(`에러내용 : ${err.message}`);
}

try {
    b = foo( 'hello', '' );
} catch (err) {
    console.log(`에러이름 : ${err.name}`);
    console.log(`에러내용 : ${err.message}`);
}

console.log(a);
console.log(b);

 */


try {
    a = foo( '', '1234' );
} catch( err ) {
    console.log(`에러이름 : ${err.name}`);
    console.log(`에러내용 : ${err.message}`);
}

try {
    b = foo( 'hello', '' );
} catch( err ) {
    console.log(`에러이름 : ${err.name}`);
    console.log(`에러내용 : ${err.message}`);
}

console.log(a);
console.log(b);

