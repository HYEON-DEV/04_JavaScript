
//  멤버변수만 정의한 클래스
class MemberClass {
    userName = null;
    email = null;
}

//  클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);



//  객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적이다
m1.userName = '승현';
m1.email = 'sh@gmail.com';

m2.userName = '범석';
m2.email = 'bs@gmail.com';

console.log(m1);
console.log(m2);