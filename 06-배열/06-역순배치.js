const data = [1,5,2,4,3];
console.log(data);

const p = data.length%2 ? (data.length-1)/2 : data.length/2;

for ( let i=0; i<p; i++) {
    const k = data.length-i-1;
    const tmp = data[i];
    data[i] = data[k];
    data[k] = tmp;
}

console.log(data);

