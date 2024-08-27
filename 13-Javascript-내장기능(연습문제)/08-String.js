
//  객체라는 건 그 안에 멤버변수(property)와 메서드가 내장되어 있음을 의미한다
//  문자열을 가공하거나 내용을 추출 --> parsing  parser

//  객체 생성 방식으로 문자열 만들기
const str2 = new String('Hello Javascript');
console.log(str2);



const msg = "Life is too short, You need Javascript";

const len = msg.length;
console.log(`문자열 길이 : ${len}`);

//  파라미터 값의 위치의 글자 리턴   ( 0부터 카운트 )
const str2nd = msg.charAt(2);
console.log(`두번째 글자 : ${str2nd}`);
console.log(`두번째 글자 : ${msg[2]}`);

//  파라미터의 값이 처음 나타나는 위치 리턴
const p1 = msg.indexOf('f');
console.log(`'f'가 처음 나타나는 위치 : ${p1}`);
console.log(`'z'가 처음 나타나는 위치 : ${msg.indexOf('z')}`);  //  없으면 -1 리턴
console.log(`'short'가 처음 나타나는 위치 : ${msg.indexOf('short')}`);  

//  두번째 파라미터의 값의 위치부터 찾기 시작
const p2 = msg.indexOf('i');
const p3 = msg.indexOf('i',p2+1);
console.log(`'i'가 첫번째로 나타나는 위치 : ${p2}`);
console.log(`'i'가 두번째로 나타나는 위치 : ${p3}`);

//  파라미터의 값이 마지막으로 나타나는 위치 리턴
const p4 = msg.lastIndexOf('a');
console.log(`'a'의 마지막 위치 : ${p4}`);

if ( msg.indexOf('Hello') > -1 ) {
    console.log('Hello 가 포함됨');
} else {
    console.log('Hello가 포함되지 않음');
}

//  0~16 자르기
const substring1 = msg.substring(0,17);
console.log(`문자열 자르기 : ${substring1}`);
//  19부터 자른다
const substring2 = msg.substring(19);
console.log(`문자열 자르기 : ${substring2}`);

console.log( msg.toUpperCase() );

console.log( msg.toLowerCase() );






//  앞뒤 공백 지우기
src1 = '  Hello  '
console.log( src1.trim() );

const txt = "HTML, CSS, JavaScript";
const arr = txt.split(',');
console.log(arr);

const txt2 = txt.replace(',', '$');
console.log(txt2);

const test = "Hello Java,Java, Java";
console.log(test.replaceAll('Java', ' JvavaScipt'));

