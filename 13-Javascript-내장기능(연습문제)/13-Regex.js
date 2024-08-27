
//  정규표현식
//  문자열의 형식을 의미하는 수식
//  문자열이 특정 조건을 충족하는지 검사하거나
//  특정 패턴의 문자열 검색, 치환 하기 위해 사용한다

//  const 변수명 = /정규표현식/
//  test() 메서드 
//  ^ : 문자열의 시작
//  $ : 문자열의 종료
//  * : 반복여부 표현,  앞의 문자가 없거나 무한정으로 많은 경우
//  .............

//  사용자가 입력한 모든 내용은 문자열 변수

const username = '자바스a크립트';
const age = '20ㅁ';
const userid = 'js123**&&&&&&&&&&&&&&&&&&&';

//  이름의 한글 입력 검사
const pattern1 = /^[ ㄱ-ㅎ가-힣 ]*$/;
if ( !pattern1.test(username) ) {   // username이 pattern1에 부합하지 않으면
    console.log('이름은 한글만 입력 가능합니다.');
}

//  나이의 숫자 입력 검사
const pattern2 = /^[0-9]*$/;
if ( !pattern2.test(age) ) {
    console.log('나이는 숫자만 입력 가능합니다');
}

//  아이디의 영문+숫자 검사
const pattern3 = /^[ a-zA-Z0-9 ]*$/;
if ( !pattern3.test(userid) ) {
    console.log('아이디는 영어+숫자 조합으로만 입력 가능합니다');
}

//  아이디의 최대 글자수 검사
if ( userid.length > 20 ) {
    console.log('아이디는 최대 20자 까지 입력 가능합니다');
}

console.log('- - 검사완료 - -');

