/* 
//  비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행할 수 있는 기법

function random( n1, n2 ) {
    return parseInt( Math.random() * (n2-n1+1) ) + n1;
}

//  Promise 를 가동하기 위해서는 Promise 객체를 리턴하는 함수가 필요하다
function getLuckyResult() {
    //  Promise 객체는 resolve 함수와 reject 함수를 파라미터로 받는 콜백이 필요하다
    return new Promise( function ( resolve, reject ) {
        //  이 안에서 비동기 작업을 시작함
        setTimeout( ()=>{
            console.log('당신의 추첨 결과는...?');
            const lucky = random( 1, 9 );
            if ( lucky%2 == 0 ) {
                //  성공 -> resolve()
                //  파라미터는 하나만 가능
                //  여러 개의 정보 보내야 하는 경우 JSON 구조
                resolve( { msg:'당첨', a:1, b:2, c:3 } );
            } else {
                reject( { msg:'꽝', d:-1, e:-2 } );
            }
        }, 1000 );
    });
}

//  Promise 객체 리턴받기 위한 함수 호출
//  getLucksyResult 함수 내부에서 Promise 객체가 생성되면서
//  Promise 클래스에 전달한 생성자 파라미터 (콜백함수) 가 실행된다
//  --> resolve  or reject가 호출된 상태라는 의미
const mypromise = getLuckyResult();

//  Promise 객체가 생성되는 과정에서 생성자로 전달된 콜백함수의 실행 결과를 감지하는 부분
// --> resolve or reject 중에서 실행된 함수가 무엇인지 감지
// --> 비동기 작업의 결과를 알아냄
// --> 타이머 종료에 이은 후속처리가 가능하다는 의미
mypromise.then( ({msg,a,b,c}) => {
    //  성공 -> resolve()
    console.log(`${msg}, a=${a}, b=${b}, c=${c}`);
} ).catch(({msg,d,e})=>{
    //  실패 -> reject()
    console.error(`${msg}, d=${d}, e=${e}`);
}).finally(()=>{
    console.log('fin : ');
});



//  비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행할 수 있는 기법
 */



function random( n1, n2 ) {
    return parseInt( Math.random() * (n2-n1+1) ) + n1;
}

function getLuckyResult () {
    return new Promise ( function ( resolve, reject ) {
        setTimeout( () => {
            console.log('추첨 결과는...?');

            const lucky = random(1,9);

            if ( lucky%2 == 0 ) {
                resolve( { msg: lucky+'-->당첨', a: 1, b: 2, c: 3 } );
            } else {
                reject( { msg: lucky+'-->꽝', d: -1, e: -2 } );
            }
        }, 1000 );
    } );
}

const mypromise = getLuckyResult();
mypromise.then( ( {msg,a,b,c} ) => {
    console.log(`${msg}, a=${a}, b=${b}, c=${c}`);
} ).catch( ( {msg,d,e} ) => {
    console.error(`${msg}, d=${d}, e=${e}`);
} ).finally( () => {
    console.log('FIN');
} );

