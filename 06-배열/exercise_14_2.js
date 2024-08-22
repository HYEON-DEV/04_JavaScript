
const cs = [ 1,5,7,"J","Q","A" ];
const yh = [ 2,3,4,5,"Q","K","A" ];

/* 
let cnt=0;
for ( let i=0; i<yh.length; i++ ) {
    for ( let j=0; j<cs.length; j++ ) {
        if ( yh[i] == cs[j] ) {
            cnt++;
        }
    }
}
console.log(`가져올 수 있는 카드의 수 : ${cnt}장`);




for ( let i=0; i<yh.length; i++ ) {
    for ( let j=0; j<cs.length; j++ ) {
        if ( yh[i] == cs[j] ) {
            console.log(`${j}번째 >> ${cs[j]}`);
        }
    }
}
 */

let cnt = 0;
for ( let i=0; i<yh.length; i++ ) {
    for ( let j=0; j<cs.length; j++ ) {
        if ( yh[i] == cs[j] ) {
            cnt++;
        }
    }
}
console.log(cnt);

for ( let i=0; i<yh.length; i++ ) {
    for ( let j=0; j<cs.length; j++ ) {
        if ( yh[i] == cs[j] ) {
            console.log(`${j}번째 >> ${cs[j]}`);
        }
    }
}