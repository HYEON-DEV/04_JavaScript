
class HelloWorld {
    message = null;

    sayHello() {
        console.log(this.message);
    }

    setEng() {
        this.message = 'Hello';
    }

    setKor() {
        this.message = '안녕';
    }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();

