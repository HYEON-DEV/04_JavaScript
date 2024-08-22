
/* 
const work = [7,5,5,5,5,10,7];

let sum = 0;
let money;

for ( let i=0; i<work.length; i++ ) {
    if ( i<4 ) {
        money=4500;
    }
    else {
        money=5200;
    }
    sum += money * work[i];
}

console.log( "일주일간의 총 급여 : " + sum );


    //   money += time[i] * ( i<4 ? 4500 : 5200 );

 */


const time = [7,5,5,5,5,10,7];

let sum=0;
for ( let i=0; i<time.length; i++ ) {
    sum += time[i] * (i<4? 4500 : 5200);
}
console.log(sum);