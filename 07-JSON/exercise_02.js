
const exam = {
    '철수': [89,82,79,91],
    '민영': [91,95,94,89],
    '남철': [65,57,71,64],
    '혜진': [82,76,81,83]
}

//  2-1.  학생별 총점과 평균

const keys = Object.getOwnPropertyNames(exam);

for (  let i=0; i<keys.length; i++) {
    let sum = 0;

    for ( let j=0; j<exam[keys[i]].length; j++ ) {
        sum += exam[keys[i]][j];
    }

    let avg = sum / exam[keys[i]].length;
    console.log(`${keys[i]}의 총점은 ${sum}이고 평균은 ${avg}`);
}

//console.log(exam[keys[0]]);
//console.log(exam.keys[0]);
// console.log(exam.철수);
// console.log(keys[0]);

//  2-2.  [국어, 영어, 수학, 과학]  수학에 대한 모든 학생의 총점과 평균

let sum = 0;
for ( let i=0; i<keys.length; i++ ) {
    sum += exam[keys[i]][2];
}
let avg = sum / keys.length;
console.log(`모든 학생의 수학 총점은 ${sum}점 이고 평균은 ${avg}점 입니다.`);

