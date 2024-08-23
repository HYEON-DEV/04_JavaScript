/* 
//  옛날 방법  ES5
const user = { a:100, b:200 };

//console.log(user.c&&user.c.name);
console.log(user&&user.c&&user.c.name);

console.log('End');
 */

/* 
//  완전 고전
if (user) {
    if (user.address) {
        console.log(user.address.city);
    }
}
 */


/* 
const user = {};

//  ES5의 해결책    -->   단계별로 객체가 존재하는지 검사
//console.log(user && user.address && user.address.city);
*/




//  옵셔널 체이닝  ES6
console.log(user?.address?.city);

console.log('프로그램 종료');
