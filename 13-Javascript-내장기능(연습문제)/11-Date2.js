
//  timestamp
//  1970년 1월 1일 자정부터 현재까지 흐른 시간을 초단위로 환산한 값
//  getTime() 함수는 timestamp 를 밀리세컨드단위로 환산하여 반환한다

const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

//  몇일이 지났는지
const prevDate = new Date( date.getFullYear(), 0, 1 );
const ts2 = prevDate.getTime();
const tmp1 = ts1 - ts2;
console.log(tmp1);
//  24시간 * 60분 * 60초 * 1000
const day1 = Math.floor( tmp1 / (24*60*60*1000) );
console.log(`올해는 ${day1}일 지났습니다.`);


// 몇일 남았는지
const nextDay = new Date ( date.getFullYear(), 11, 31 );
const ts3 = nextDay.getTime();
const tmp2 = ts3-ts1;
const day2 = Math.ceil( tmp2 / (24*60*60*1000) );
console.log(`올해는 ${day2}일 남았습니다.`);


//  30일 후
const a = date.getDate() + 30;
date.setDate(a);
console.log(date.toLocaleString('ko-KR'));
//  30일 지난 후에서 100일전 계산
const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));


//  오늘 날짜 객체
const today = new Date();
today.setDate(1);
const startDay = today.getDay();
//  이번달 1일에 대한 요일 인덱스
console.log(startDay);

// 이번달 마지막날 몇일인지 구함 -> 다음달의 0번째 날짜 구함
const m  = today.getMonth();
today.setMonth(m+1);
today.setDate(0);
const lastDate = today.getDate();
console.log(lastDate);


// 
var data = new Array(6);
for ( let i=0; i<data.length; i++ ) {
    data[i] = new Array(7);
}

let cnt = 1;

for ( let i=0;i<data.length; i++ ) {
    for ( let j=0; j<data[i].length; j++ ) {
        if ( i==0 && j<startDay || cnt>lastDate ) {
            data[i][j] = 0;
        } else {
            data[i][j] = cnt++;
        }
    }
}

for ( let i=0; i<data.length; i++ ) {
    let str='';
    for ( let j=0; j<data[i].length; j++ ) {
        str += data[i][j]==0 ? ' \t' : data[i][j]+'\t'; 
    }
    console.log(str);
}