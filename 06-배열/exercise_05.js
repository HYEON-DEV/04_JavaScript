

const price = [ 38000, 20000, 17900, 17900 ];
const qty = [ 6, 4, 3, 5 ];
let arr = new Array(4);
//console.log(arr);

let money = 0;

for ( let i=0; i<price.length; i++ ) {
    money += price[i]*qty[i];

    arr[i] = price[i]*qty[i];
}

console.log("상품금액 : " + arr);


/* -- -- -- -- -- -- -- -- -- 문제5 -- -- -- -- -- -- -- -- -- --  */
let max = arr[0];

for ( let i=1; i<arr.length; i++ ) {    
    if ( max < arr[i] ) {
        max = arr[i];
    }
}
console.log("가장 비싼 항목의 상품금액 : " + max);


/* -- -- -- -- -- -- -- -- -- 문제6 -- -- -- -- -- -- -- -- -- --  */
let free = 0;

for ( let i=0; i<arr.length; i++ ) {
    if ( arr[i] >= 80000 ) {
        free++;
    }
}

console.log("무료 배송되는 항목 : " + free);


