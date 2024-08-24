

class MyListStack {
    #data;
    #size;

    constructor () {
        this.#data = new Array(0);
        this.#size = 0;
    }

    get data () {
        return this.#data;
    }

    get size () {
        return this.#size;
    }

    push (item) {
        this.data[this.size]=item;
        this.#size++;
    }

    pop () {        
        const tmp = new Array(this.size);
        for ( let i=0; i<tmp.length; i++ ) {
            tmp[i] = this.data[i];
        }
       
        this.#data = new Array(this.size-1);
        for ( let i=0; i<this.data.length; i++ ) {
            this.#data[i] = tmp[i];
        }

        this.#size--;
        return tmp[this.size];
    }
}

class MyList extends MyListStack {
    shift () {
        const first = this.data[0];
        this.#size--;

        const tmp = new Array(this.size);
        for ( let i=0; i<tmp.length; i++ ) {
            tmp[i] = this.data[i+1];
        }

        this.#data = new Array(this.size);
        for ( let i=0; i<this.data.length; i++) {
            this.#data[i] = tmp[i];
        }

        return first;
    }

    unshift(item) {
        const tmp = new Array(this.size);
        for ( let i=0; i<tmp.length; i++ ) {
            tmp[i] = this.data[i];
        }

        this.#data = new Array(this.size+1);
        this.#data[0] = item;
        for ( let i=1; i<this.data.length; i++) {
            this.#data[i] = tmp[i-1];
        }
    }
}

const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

const x = list.shift();
console.log(`추출된 데이터: ${x}`);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

list.push(400);
list.push(500);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

const y = list.shift();
console.log(`추출된 데이터: ${y}`);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

list.push(600);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

const z = list.shift();
console.log(`추출된 데이터: ${z}`);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

list.unshift(700);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);

list.unshift(800);
list.unshift(900);
console.log(`원소의 수: ${list.size}, 데이터 확인: [ ${list.data} ]`);



