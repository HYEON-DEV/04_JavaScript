
const names = [ "재석", "민영", "종민", "광수", "승기", "새정" ];
const points = [ 82, 91, 54, 62, 88, 90 ];
console.log("이름 : " + names);    // console.log(`이름 : ${names}`);
console.log("점수 : " + points);

let n = names.length;
const arr = new Array(n);
//console.log(arr);
for ( let i=0; i<names.length; i++ ) {
    arr[i] = [ names[i], points[i] ];
}
console.log("이름, 점수 >> ");
console.log(arr);


for ( let i=0; i<arr.length-1; i++ ) {
    for ( let j=0; j<arr.length-1-i; j++ ) {
        if ( arr[j][1] < arr[j+1][1] ) {
            const tmp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log("점수가 높은 순 >> ");
console.log(arr);

for ( let i=0; i<arr.length; i++ ) {
    console.log("%d등 : %s", i+1, arr[i][0]);
}

