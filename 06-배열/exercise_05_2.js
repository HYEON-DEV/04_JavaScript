
const price = [ 38000, 20000, 17900, 17900 ];
const qty = [ 6, 4, 3, 5 ];
/* 
let money = price[0] * qty[0];

for ( let i=1; i< price.length; i++ ) {
    const sum = price[i] * qty[i];

    if ( money < sum ) {
        money = sum;
    }
}

console.log(money);



let count = 0;

for ( let i=0; i<price.length; i++ ) {
    const sum = price[i] * qty[i];

    if ( sum >= 80000) {
        count++;
    }
}
console.log(count);
 */

let max = price[0] * qty[0];

for ( let i=1; i<price.length; i++ ) {
    let money = price[i]*qty[i];
    if ( max < money ) {
        max = money;
    }
}

console.log(max);

let cnt=0;
for ( let i=0; i<price.length; i++) {
    let money = price[i] * qty[i];
    if ( money >= 80000 ) {
        cnt++;
    }
}
console.log(cnt);

