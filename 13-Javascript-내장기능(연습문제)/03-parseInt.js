
//  parseInt( value, int )
//  변환불가면 NaN
//  두번째 파라미터는  '진법'  기본값:10
//  문자열 선행 공백은 무시
//  숫자+글자 -> 숫자부분만 
//  글자+숫자 -> 글자 -> 변환불가 -> NaN
//  16진법 : 0x12       8진법 : 0o12

console.log(parseInt('0xF',16));
console.log(parseInt('15,123',10));     //  콤마는 문자열이므로 콤마 이후는 버려진다
console.log(parseInt('FXX123',10));     //  16진수 기준 정상숫자인 F까지 인식,  문자열X이후로는 버려진다
console.log(parseInt('15*3',10));      //  문자열에서 * 는 문자이므로 '*'이후는 버려진다

console.log(parseInt('-0F',16));
console.log(parseInt('-0XF',16));
