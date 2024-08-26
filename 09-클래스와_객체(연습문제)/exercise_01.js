
class Student {
    kor;
    eng;
    math;

    constructor ( kor, eng, math ) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    sum () {
        return this.kor+this.eng+this.math;
    }

    avg () {
        return this.sum() / 3;
    }

}

const student = {
    '철수' : new Student( 92, 81, 77 ),
    '영희' : new Student( 72, 95, 98 ),
    '민혁' : new Student( 80, 86, 84 )
};

for ( const k in student ) {
    console.log(`${k}의 총점은 ${student[k].sum()}점 이고 평균은 ${student[k].avg()}점 입니다.`);
}


