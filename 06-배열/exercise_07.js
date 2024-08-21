

const money = [ 209000, 109000, 119000, 109000, 94000 ];

for ( let i=0; i<money.length-1; i++ ) {
    for ( let j=i+1; j<money.length; j++ ) {
        if ( money[i] > money[j] ) {
            const tmp = money[i];
            money[i] = money[j];
            money[j] = tmp;
        }
    }
}

console.log(money);

