/* 
function random( n1, n2 ){
    return parseInt( Math.random() * (n2-n1+1) ) + n1;
}

function getLuckyResult() {
    return new Promise( function ( resolve, reject ) {
        setTimeout( () => {
            console.log('당신의 추첨 결과는...?');
            const lucky = random(1,9);

            if ( lucky%2 == 0 ) {
                resolve( {msg:'당첨', a:1, b:2, c:3} );
            } else {
                reject( { msg:'꽝', d:-1, e:-2 } );
            }
        }, 1000 );
    }
    );
}

( async () => {
    //  비동기처리가 성공했을 때 전다로디는 결과를 저장할 변수
    let result = null;

    try {
        //  비동기처리 호출
        //  Promise 객체 안에서 작업이 성공하여 resolve 가 호출되면서 주입된 파라미터가 리턴
        result = await getLuckyResult();
    } catch (e) {
        //  Promise 객체 안에서 작업 실패하여 reject가 호출되면 실행된다
        //  reject 에 전달된 파라미터는 에러 객체로 전달된다
        console.error(`${e.msg}, d=${e.d}, e=${e.e}`);
        return;
        //  catch에서의 return은 finally 블록 실행 후 작동
    } finally {
        console.log('FIN');
    }

    console.log(`${result.msg}, a=${result.a}, b=${result.b}, c=${result.c}`);
} ) ();

 */


function random( n1, n2 ){
    return parseInt( Math.random() * (n2-n1+1) ) + n1;
}

function getLuckyResult () {
    return new Promise ( function (resolve,reject) {
        setTimeout( () => {
            console.log('추첨 결과는...?');
            const lucky = random(1,9);
            if ( lucky%2 == 0 ) {
                resolve( { msg: lucky+'-->당첨', a:1, b:2, c:3 } );
            } else {
                reject( { msg: lucky+'-->꽝', d:-1, e:-2 } );
            }
        }, 1000 );
    } );
}

( async () => {
    let result = null;

    try {
        result = await getLuckyResult();
    } catch (e) {
        console.error(`${e.msg}, d=${e.d}, e=${e.e}`);
        return;
    } finally {
        console.log('FIN');
    }

    console.log(`${result.msg}, a=${result.a}, b=${result.b}, c=${result.c}`);
} ) ();   

