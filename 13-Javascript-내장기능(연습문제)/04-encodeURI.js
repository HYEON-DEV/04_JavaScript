
const set1 = ';,/?:@&=+$#';     //  예약 문자
const enc1 = encodeURI(set1);
console.log(enc1);
console.log( decodeURI(enc1) );

const set2 = "-_.!~*'()";       // 비예약 문자
console.log( encodeURI(set2) );

const set3 = 'ABC abc 123';
const enc3 = encodeURI(set3);
console.log( enc3 );
console.log( decodeURI(enc3) );

const set4 = '자바스크립트';
console.log( encodeURI(set4) );

