
class Rectangle {
    #width;
    #height;
    
    /* 
    constrctor () {

    } 
    */

    set width(value) {
        this.#width = value;
    }
    get width() {
        return this.#width;
    }

    set height(value) {
        this.#height = value;
    }
    get height() {
        return this.#height;
    }

    getAround() {
        return 2*(this.width+this.height);
    }

    getArea() {
        return this.width * this.height;
    }

}

const rec = new Rectangle();
rec.width = 10;
rec.height = 5;

console.log(`둘레의 길이는 ${rec.getAround()}이고 넓이는 ${rec.getArea()}입니다.`);