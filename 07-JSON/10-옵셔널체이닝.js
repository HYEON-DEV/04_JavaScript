
const user = {};

//  ES5의 해결책    -->   단계별로 객체가 존재하는지 검사
//console.log(user && user.address && user.address.city);


console.log(user?.address?.city);

console.log('프로그램 종료');

