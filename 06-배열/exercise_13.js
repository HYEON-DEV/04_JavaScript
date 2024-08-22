/* 
const arr = new Array(5);

for ( let i=0; i<arr.length; i++ ) {
    arr[i] = new Array(5);
}

//console.log(arr);


for ( let i=0; i<arr.length; i++ ) {
    for ( let j=0; j<arr[i].length; j++ ) {
        if ( i==j ) {
            arr[i][j] = 1;
        }
        else {
            arr[i][j] = 0;
        }
        // arr[i][j] = i==j ? 1: 0;
    }
}
console.log(arr);
 */



const arr = new Array(5);
for ( let i=0; i<arr.length; i++ ) {
    arr[i] = new Array(5);
}
//console.log(arr);

for (  let i=0; i<arr.length; i++) {
    for ( let j=0; j<arr[i].length; j++) {
        arr[i][j] = i==j? 1 : 0;
    }
}
console.log(arr);

