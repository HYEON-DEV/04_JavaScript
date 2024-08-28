

const ssn = '020517-3******';
const yy = 20 + ssn.substring(0,2);  //console.log(yy);
const mm = parseInt( ssn.substring(2,4) );  //console.log(mm);
const dd = ssn.substring(4,6);  //console.log(dd);

const date = new Date();
const now_year = date.getFullYear();
//console.log( date );
//console.log( now_year );
const age = now_year - yy + 1;

const gen = ssn.split('-')[1][0]==3 ? '남자' : '여자';  
//console.log(gen);

console.log(`${yy}년 ${mm}월 ${dd}일에 태어난 ${age}세 ${gen}입니다.`);

