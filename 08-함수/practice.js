
//  익명함수  anonymous function
/* 
const say = function(msg) {
    console.log(`hello ${msg}`);
};

say('beom');

 */


//
/* 
const calc = {
    a : 100,
    b : 200,
    plus : function(x,y){
        return x+y;
    },
    minus : function(x,y){
        return x-y;
    }
}

let a = calc.plus(4,5) + calc.minus(5,4);

console.log(a);
 */


/* 
// 화살표 함수
const foo = (x) => {
    return x+1;
};
console.log(foo(3));


const fx = x => {
    return x-1;
};
console.log(fx(5));


const func = (x,y) => x+y-1;
console.log(func(5,4));
 */

/* 
// 
function something(x,y,cb) {
    const result = cb(x,y);
    console.group(cb);
    console.log(`함수는 ${cb} ${x}와 ${y}의 연산 결과는 ${result}`);
    console.groupEnd();
}

function plus(a,b) { return a+b; }
function minus(a,b) { return a-b;}

something(1,1,plus);

something(1,1,function(a,b){return a+b;});

something(1,1,(x,y)=>{return x*y;});
 */



//  