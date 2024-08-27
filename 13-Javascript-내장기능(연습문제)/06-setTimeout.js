
//  setTimeout ( func, int )
//  @param  func : 콜백함수
//  @param  int  : 1/1000초 단위의 시간값
//  func 실행여부와 상관없이 즉시 실행된다

function foo() {
    for ( let i=1; i<10; i++ ) {
        console.log(`2 x ${i} = 2*${i}`);
    }
}

setTimeout( foo, 3000 );
console.log('구구단');


setTimeout( () => {
    for ( let i=0; i<10; i++ ) {
        console.log(`3 x ${i} = 3*${i}`);
    }
}, 1500 );

console.log('- - 프로그램 종료 - -');

