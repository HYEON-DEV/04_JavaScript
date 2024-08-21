
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  */
var data = new Array(6);

for ( let i=0; i<data.length; i++ ) {
    data[i] = new Array(7);
}

// console.log(data);

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  */
let num=0;
for ( let i=0; i<data.length; i++ ) {
    for ( let j=0; j<data[i].length; j++) {

        if ( i==0 && j<3 || num>30 ) {
            data[i][j] = 0;
        }
        else {
            data[i][j] = num;
            num++;
        }
    }
}

console.log(data);