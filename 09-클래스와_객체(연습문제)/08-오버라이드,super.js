
class Terran {
    #name;
    #hp;
    #dps;

    //
    constructor (name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log(`${this.#name}  체력: ${this.#hp},  공격력: ${this.#dps}`);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }

    get dps() {
        return this.#dps;
    }
    set dps(value) {
        this.#dps = value;
    }

    //
    move(position) {
        console.log(`${this.name} 이 ${this.position}까지 이동`);
    }
    
    attack(target) {
        console.log(`${this.name} 이 ${target}을 공격.  데미지: ${this.dps}`);
    }
}

class Marine extends Terran {
    //  attack 메서드 override
    attack(target){
        console.log(`${this.name}이 ${target}에게 사격을 개시합니다.  데미지: ${this.dps}`);
    }
}

class Tank extends Terran {
    //  attack 메서드 override
    attack(target) {
        super.attack(target);
        console.log(' >>> 탱크 포격');
    }
}

class Firebat extends Terran {
    //  생성자 override
    constructor(name) {
        super(name, 500, 50);
    }
}

const m = new Marine('해병1', 120, 30);
m.attack('질럿');

const t = new Tank('탱크1', 120, 30);
t.attack('드라군');

const f = new Firebat('화염방사병');
f.attack('적');