
//  함수를 변수에 대입하기

function sayHello(msg) {
    console.log("say hello(" + msg + ")");
}

sayHello("hyeon");

const say = sayHello;
say('seung hyeon');

//  함수가 대입된 변수는 그자체가 함수 역할을 한다.

