
// 
class SayHello {
    eng() {
        console.log('Hello');
    }
}


//  기본 기능을 확장하는 클래스
//  부모 기능을 상속받고, 추가로 자신이 구현하는 기능도 사용가능

class SayHelloWorld extends SayHello {
    kor() {
        console.log('안녕');
    }
}

const say = new SayHelloWorld();
say.eng();
say.kor();