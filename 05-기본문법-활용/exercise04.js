/* 
let sum=0;

for ( let i=1; i<7; i++ ) {
    let j = 6-i;
    if ( j<1 ) {
        break;
    }
    console.log("[ %d, %d ]", i, j);
    sum ++;
}

console.log("경우의 수는 %d개 입니다.", sum);
 */

/* -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- */

/* 
let count=0;
for ( let x=1; x<7; x++ ) {
    for ( let y=1; y<7; y++ ) {
        if ( x+y == 6 ) {
            console.log("[ %d, %d ]", x, y);
            count++;
        }
    }
}
console.log("경우의 수는 %d개 입니다.", count);
 */



let cnt=0;
for ( let i=1; i<7; i++ ) {
    for ( let j=1; j<7; j++ ) {
        if ( i+j == 6 ) {
            console.log("[ %d, %d ]", i, j);
            cnt++;
        }
    }
}
console.log("경우의 수는 %d개 입니다.", cnt);