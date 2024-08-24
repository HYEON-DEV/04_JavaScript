
class Student {
    #major;
    #studno;

    constructor ( major, studno ) {
        this.#major = major;
        this.#studno = studno;
    }

    get major() {
        return this.#major;
    }
    set major(value) {
        this.#major = value;
    }

    get studno() {
        return this.#studno;
    }
    set studno(value) {
        this.#studno = value;
    }

    sayHello () {
        console.log(`나는 ${this.major}학과 ${this.studno}학번 입니다.`);
    }

}

const stud = new Student( '컴퓨터', 12345678 );
stud.sayHello();