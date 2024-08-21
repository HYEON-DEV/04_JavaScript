

const student = [ "둘리", "도우너", "또치", "희동" ];
const grade = [ 
    [ 78, 89, 96 ], 
    [ 62, 77, 67 ], 
    [ 54, 90, 80 ],
    [ 100, 99, 98 ]
];

const arr = new Array(4);
let total = 0;

for ( let i=0; i<grade.length; i++ ) {
    let sum=0;

    for ( let j=0; j<grade[i].length; j++ ) {
        sum += grade[i][j];
    }

    let avg = sum / grade[i].length;
    //console.log("%s 총점: %d점, 평균: %d점", student[i], sum, avg);
    total += avg;
}
let avg = total/student.length;

console.log("반 평균 : " + avg);

