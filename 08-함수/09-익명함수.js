
//  anonymous function

const say = function(msg) {
    console.log("say hello ("+msg+")");
};

//  함수가 대입된 변수는 그 자체가 함수 역할을 한다
say('hyeon');


//
const calc = {
    a : 100,
    b : 200,
    foo : function(x,y) {
        return x+y;
    },
    bar : function(x,y) {
        return x-y;
    }
}

let a = calc.foo(2,3);
let b = calc.bar(5,6);

console.log(calc);
console.log(a, b);
