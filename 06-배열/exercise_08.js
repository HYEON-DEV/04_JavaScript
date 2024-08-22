

const arr = [ 5,3,2,8,9 ];
console.log(arr);

const repeat = arr.length%2 ? (arr.length-1)/2 : arr.length/2;
//console.log(repeat);

for ( let i=0; i<repeat; i++ ) {
    const j = arr.length-i-1;
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log(arr);

