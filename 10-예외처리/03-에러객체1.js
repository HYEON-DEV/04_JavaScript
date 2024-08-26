
//  개발자가 직접 정의하는 에러

//  에러 객체 생성
//  생성자 파라미터로 에러 내용 전달
let err = new Error('이상한 일이 벌어졌습니다');
console.log(`에러이름 : ${err.name}`);
console.log(`에러내용 : ${err.message}`);


// 개발자가 직접 에러 발생시킬 수 있다
throw err;

console.log('프로그램 종료');

