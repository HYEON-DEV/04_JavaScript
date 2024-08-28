

let lotto = [];

function random(n1,n2) {
    return parseInt( Math.random()*(n2-n1+1) ) + n1;
}
/* 
for ( let i=0; i<6; i++ ) {
    lotto[i] = random(1,45);

    for ( let j=0; j<i-1; j++ ) {
        if ( lotto[i] != lotto[j] ) {
            continue;
        } else {
            i--;
            break;
        }
    }
} 
*/
for ( let i=0; i<6; i++ ) {
    lotto[i] = random(1,45);

    let j=0;
    while (i>0) {    
        if ( i>j && ( lotto[i] != lotto[j] ) ) {
            console.log(lotto);
            j++;
        } else {
            i--;
            break;
        }
    }    
}

console.log(lotto);

