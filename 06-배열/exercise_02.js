

const grade = [ 75, 82, 91 ];

let sum = 0;

for ( let i=0; i<grade.length; i++ ) {
    sum += grade[i];
}

let avg = sum / grade.length;

console.log("총점 : " + sum);
console.log("평균 : " + avg);

