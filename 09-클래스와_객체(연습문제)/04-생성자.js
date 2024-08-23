
class MyUnit {
    name;
    speed;
    dps;

    constructor ( name, speed, dps ) {
        this.name = name;
        this.speed = speed;
        this.dps = dps;
        console.log(`>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (speed=${speed}), dps=(${dps})`);
    }

    move (where) {
        console.log(`${this.name}이 ${where}로 ${this.speed}의 속력으로 이동`);
    }

    attack (target) {
        console.log(`${this.name}이 ${target}에게 초당 ${this.dps}의 데미지 입힘`);
    }
}
/* 
//  단일 객체 사용
const marin = new MyUnit( 'Night', 5, 10 );
marin.move('던전');
marin.attack('골렘');
 */

// 객체 배열 사용
const team = [
    new MyUnit('기사', 5, 10),
    new MyUnit('힐러', 15, 1),
    new MyUnit('성직자', 7, 20)
];

for ( const t of team ) {
    t.move('던전');
    t.attack('보스몹');
}

