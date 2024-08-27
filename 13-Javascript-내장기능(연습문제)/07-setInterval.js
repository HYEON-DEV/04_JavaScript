
//  setInterval ( func, int )
//  두번째 인자로 전달된 시간마다 한 번씩 호출된다  (타이머 기능)
//  func 실행 여부와 상관없이 즉시 실행
//  타이머 종료시킬 수 있는 timerid 리턴 -> clearInterval() 함수에 전달 -> 타이머 종료

let cnt1 = 0;

const timerId1 = setInterval ( () => {
    cnt1++;
    console.log(`[타이머 1]  ${cnt1} 번째 자동 실행`);

    if ( cnt1 == 5 ) {
        console.log('타이머 1  종료');
        clearInterval( timerId1 );
    }
}, 3000 );

console.log('타이머 1  시작');

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
let cnt2 = 0;

const timerId2 = setInterval ( () => {
    cnt2++;
    console.log(`[타이머 2]  ${cnt2} 번째 자동 실행`);

    if ( cnt2 == 10 ) {
        console.log('타이머 2  종료');
        clearInterval( timerId2 );
    }
}, 1000 );

console.log('타이머 2  시작');

