

//  Date        날짜 처리를 위한 클래스
//  객체를 생성하는 순간의 시스템 시각이나 생성자 파라미터로 전달

const days = [ '일', '월', '화', '수', '목', '금', '토' ];

const date1 = new Date();
//console.log(date1);

const yy = date1.getFullYear();     //console.log(yy);
const mm = date1.getMonth() + 1;
const dd = date1.getDate();
const i = date1.getDay();
const day = days[i];
const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

var result = `${yy}-${mm}-${dd} ${day}요일 ${hh}:${mi}:${ss}`;
console.log(result);

//  날짜를 의미하는 문자열 반환
console.log( date1.toDateString() );
//  ISO  국제표준시간
console.log( date1.toISOString() );
//
console.log( date1.toLocaleString() );
console.log( date1.toLocaleString('de-DE') );
console.log( date1.toLocaleString('ko-KR') );
//
console.log( date1.toLocaleDateString() );
console.log( date1.toLocaleDateString('de-DE') );
console.log( date1.toLocaleDateString('ko-KR') );
//
console.log( date1.toLocaleTimeString() );
console.log( date1.toLocaleTimeString('de-DE') );
console.log( date1.toLocaleTimeString('ko-KR') );


//
//  시각이 없으므로 자정으로 설정된다
var date2 = new Date(2024,9,5);
console.log(date2.toLocaleString('ko-KR'));

// 특정 시점을 의미하는 개체 생성
var date3 = new Date(2024,3,19,22,0,0);
console.log(date3.toLocaleString('ko-KR'));

date3.setYear(2023);
date3.setMonth(3);
date3.setDate(17);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));


