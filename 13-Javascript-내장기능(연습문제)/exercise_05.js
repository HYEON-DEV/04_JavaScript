

let balls = new Array(45);
for ( let i=0; i<balls.length; i++ ) {
    balls[i]=i+1;
}
console.log(balls);
/* 
balls.map( (v,i) => {
    v = i;
    console.log(`${i}번째 원소 ==> ${v}`);
    //return i;
} );
console.log(balls);
 */

let lotto = new Array(6);

function random(n1,n2) {
    return parseInt( Math.random()*(n2_n1+1) ) + n1;
}

lotto = balls.map( (v,i) => {
    random(0,44);
    //lotto[i] = ba
} );
