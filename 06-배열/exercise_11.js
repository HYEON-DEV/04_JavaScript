
const arr = [
    [ 500, 291 ],
    [ 320, 586 ],
    [ 100, 460 ],
    [ 120, 558 ],
    [ 92, 18 ],
    [ 30, 72 ]
];

let sum = 0;

for ( let i=0; i<arr.length; i++ ) {
    arr[i][0] *= 0.9;

    sum += arr[i][0] * arr[i][1];
}
//console.log(arr);
console.log("아이템의 총 판매가격 : " + sum);

