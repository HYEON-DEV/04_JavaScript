
//  1)  존재하지 않는 key를 사용하는 경우

const foo = {
    name : '자바스크립트',
    age : 28
};

console.log(foo.email);     //  undefined

const nextAge = foo.aga + 1; 
console.log(nextAge);         //  NaN



//  2)  존재하지 않는 key에 대한 대입

foo.email = 'hello@world.com';
console.log(foo);



//  3)  빈 객체 확장

const myJson = {};
console.log(myJson);

for ( let i=0; i<10; i++ ) {
    const key = 'value' + i;
    myJson[key] = i*100;
}
console.log(myJson);

