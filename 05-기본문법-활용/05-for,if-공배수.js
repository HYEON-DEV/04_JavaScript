const x = 3;
const y = 5;

let sum = 0;

for ( let i=1; i<101; i++ ) {
    if ( i%x==0 && i%y==0 ) {
        console.log('%d 와 %d의 공배수 : %d', x, y, i);     /*   i % (x*y) == 0   */
        sum += i;
    }
}

console.log('공배수의 총 합 : ' + sum);
