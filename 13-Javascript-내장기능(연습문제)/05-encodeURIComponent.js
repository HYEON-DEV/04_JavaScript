
//  알파벳, 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩

const set1 = ';,/?:@&=+$#';
const set2 = "-_.!~*'()";  
const set3 = 'ABC abc 123';
const set4 = '자바스크립트';

const enc1 = encodeURIComponent(set1);
const enc2 = encodeURIComponent(set2);
const enc3 = encodeURIComponent(set3);
const enc4 = encodeURIComponent(set4);

console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);

console.log( decodeURIComponent(enc1) );

