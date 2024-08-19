console.group('1) Switch 기본 구문');

const 국어='B';

switch( 국어 ) {
    case 'A':
        console.log('A학점 입니다.');
        break;
    case 'B':
        console.log('B학점 입니다.');
        break;
    case 'C':
        console.log('C학점 입니다.');
        break;
    default :
        console.log('C학점 미만입니다');
        break;
}
console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- */



console.group('2) break 가 없는 경우');

const 영어 = 'B';

switch (영어) {
    case 'A':
        console.log('A학점 입니다');
    case 'B':
        console.log('B학점 입니다');
    case 'C':
        console.log('C학점 입니다');
    default :
        console.log('C학점 미만입니다');
}

console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- */



console.group('3) 의도적으로 break 조절하기');

const 수학 = 'B';
switch(수학) {
    case 'A' :
    case 'B' :
    case 'C' :
        console.log('이 과목을 패스했습니다');
        break;
    default :
        console.log('이 과목을 패스하지 못했습니다');
        break;
}

console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- */


console.group('4) break의 조건을 식으로 설정하는 경우');

const 과학 = 72;

switch (과학 > 70) {
    case true:        console.log('이 과목을 패스했습니다');
        break;
    default :
        console.log('이 과목을 패스하지 못했습니다');
        break;
}
console.groupEnd();