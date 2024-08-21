

const arr = [ 5,3,2,8,9 ];
console.log(arr);

const repeat = arr%2==0 ? arr.length/2 : (arr.length-1)/2;
//console.log(repeat);

for ( let i=0; i<repeat; i++ ) {
    const tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;
}

console.log(arr);