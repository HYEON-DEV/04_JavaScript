

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
    sum += money;
}

console.log( "일주일간의 총 급여 : " + sum );


