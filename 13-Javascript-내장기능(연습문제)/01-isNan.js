
//  숫자가 아니면 true,  숫자가 맞다면 false

console.group('true');
console.log(isNaN(isNaN));
console.log(isNaN(undefined));
console.log(isNaN({a:10, b:20}));
console.log(isNaN([10,20,30]));
console.groupEnd();

console.group('false');
console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN('37'));   //  '37'은 숫자 37로 변환할 수 있어서 false
console.log(isNaN(''));     //  빈문자열은 false 여서 0 -> false
console.log(isNaN('  '));   //  공백만으로 구성된 문자열은 0으로 변환 -> false
console.groupEnd();

