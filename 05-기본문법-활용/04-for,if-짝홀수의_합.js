let a = 0;
let b = 0;

for ( let i=1; i<11; i++ ) {
    if( i%2 == 0 ) {
        console.log('%d : 짝수', i);
        a += i;
    } else {
        console.log('%d : 홀수', i);
        b += i;
    }
}

console.log('1~10까지의 홀수들의 합 : ' + b);
console.log('1~10까지의 짝수들의 합 : ' + a);
