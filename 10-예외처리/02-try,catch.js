
const data = [1,2,3];

console.log('배열 탐색 시작');

//  try블록 실행
//  error 없다면, try블록 다 실행되고, catch블록 건너뛴다
//  error 있다면, try블록 중단되고, catch블록으로 제어 흐름이 넘어간다
//  변수 err는 무슨일이 일어났는지 설명이 담긴 에러 객체를 포함한다.

try {
    for ( let i=0; i<10; i++ ) {
        console.log( data[i].toFixed(2) );
    }
    console.log('try 블록 실행 완료');
} catch (err) {
    console.group(`${err.name} 에러발생`);  
    console.error(err.message);             //  에러정보 전체
    console.groupEnd();
    //console.error(err);
} finally {
    //  필요하지 않은 경우 생략할 수 있다
    console.log('배열 탐색 종료');
}

console.log('프로그램 종료');

