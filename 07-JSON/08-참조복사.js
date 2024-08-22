
//  값 복사  -->  일반 변수끼리의 복사  (깊은 복사)

let a = 100;
let b = a;
console.log(`a : ${a},   b : ${b}`);

a++;
console.log(`a : ${a},   b : ${b}`);



//  참조복사   (얕은 복사)
//  배열, JSON, 객체끼리의 복사는 참조처리된다
//  원본을 수정하면 복사본도 함께 수정된다, 반대도 마찬가지

const user = {
    name : 'Lee'
};

const member = user;

console.log(user);
console.log(member);


member.name = 'Kim';
console.log(user);
console.log(member);


const d1 = [1,2,3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d2[2] = 50;
console.log(d1);
console.log(d2);




//  배열끼리의 값복사 방법  (깊은복사)
const a1 = [1,2,3];
const a2 = new Array(a1.length);
for ( let i=0; i<a1.length; i++ ) {
    a2[i] = a1[i];
}
console.log(a1);
console.log(a2);


//  배열객체가 갖는 메서드를 활용한 깊은 복사 방법
//  const 새로운 면수 = 원본배열.slice();
const a3 = a1.slice();
console.log(a1);
console.log(a3);

a1[0] += 100;
console.log(a1);
console.log(a2);
console.log(a3);




//  JSON 의 깊은 복사

const addr = {
    city : '서울',
    gu : '서초'
}
const copy = {};

for ( let key in addr ) {
    copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = '운정';

console.log(addr);
console.log(copy);

const copy2 = {};
Object.assign(copy2, addr);
console.log(addr);
console.log(copy);
console.log(copy2);


