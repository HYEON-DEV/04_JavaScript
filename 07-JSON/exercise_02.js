
const exam = {
    '철수': [89,82,79,91],
    '민영': [91,95,94,89],
    '남철': [65,57,71,64],
    '혜진': [82,76,81,83]
}

//  2-1.  학생별 총점과 평균

const keys = Object.getOwnPropertyNames(exam);
/* 
for (  let i=0; i<keys.length; i++) {
    let sum = 0;
    for ( let j=0; j<exam.keys[i].length; j++ ) {
        sum += exam.keys[i][j];
    }
    let avg = sum / exam.keys[i].length;
    console.log(`${keys[i]}의 총점은 ${sum}이고 평균은 `);
}
 */
console.log(exam[keys[0]]);