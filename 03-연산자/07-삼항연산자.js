const age1 = 19;
const type1 = age1>=20 ? '성인' : '청소년';     // 청소년
console.log('당신은 %s 입니다.', type1);        // 청소년

const age2 = 22;
const type2 = age2>=20 ? '성인' : '청소년';     // 성인
console.log('%s입니다', type2);

const code=3;
const yy=6;
const result = yy + (code==3 || code==4 ? 2000 : 1900); // 2000
console.log('태어난 년도는 %d', result);    





console.group('문제1');
const year = 2024;
let age = year-1997+1;
console.log('나는 %d세 입니다.',age);
console.groupEnd();


console.group('문제2');
const myAge = 27;
var birthYear = 2024-age+1;
console.log('나는 %d년도에 태어났습니다.',birthYear);
console.groupEnd();





/****/
console.group('문제3');
const numOfApples = 123;
let basket = numOfApples%10 > 0 ? (numOfApples-numOfApples%10)/10+1 : (numOfApples-numOfApples%10)/10;
console.log('필요한 바구니의 수 : %d', basket);
console.groupEnd();





/******/
const NumOfApples = 123;
const extra = NumOfApples%10;
console.log(`나머지 : ${extra}`);
/*
const extraBasket = extra ? 1 : 0;
console.log(`나머지 담을 바구니 수 : ${extraBasket}`);

let basketCount = (NumOfApples-extra) / 10;
console.log(`10개씩 나누어 담았을 때 바구니 수 : ${basketCount}`);

let basket_count = basketCount + extraBasket;
console.log(`바구니 수 : ${basket_count}`);
*/
let basketC = (NumOfApples-extra) / 10 + (extra?1:0);
console.log(`필요한 바구니 수 : ${basketC}`);