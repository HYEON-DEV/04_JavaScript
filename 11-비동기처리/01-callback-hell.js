

//  타이머에 대한 작업 종료 후,  이어서 새로운 타이머를 만들어 진행
function random( n1, n2 ) {
    return parseInt( Math.random() * (n2-n1+1) ) + n1;
}

//  전역 setTimeout() 메서드는 만료된 후 함수나 지정한 코드 조각을 한 번 실행하는 타이머를 설정한다
//  setTimeout( function, delay );  ...........
//  function : 타이머가 만료된 뒤 실행할 function
setTimeout( ()=>{
    console.log('추첨 결과는...?');
    const lucky = random(1,9);

    setTimeout( ()=>{
        console.log( lucky%2==0? '당첨' : '꽝' );
    }, 3000 );

}, 1000 );

console.log('추첨중 - - -');

/*
Callback Hell

- JS 이용한 비동기 프로그래밍시 발생하는 문제로, 함수의 매개 변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들정도로 깊어지는 현상

- 주로 이벤트 처리나 서버 통신과 같은 비동기적인 작업을 수행하기 위해 이런 형태가 자주 등장
*/

