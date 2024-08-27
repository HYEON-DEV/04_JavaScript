
class MyClass {
    #age;
    #name;

    constructor () {
        console.log('--- MyClass 객체 생성 ---');
        this.#age = 20;
        this.#name = '노드';
    }

    say() {
        console.log(`이름 : ${this.#name}`);
        console.log(`나이 : ${this.#age}`);
    }
}

export default MyClass;
/* 
const m = new MyClass();
m.say(); */

