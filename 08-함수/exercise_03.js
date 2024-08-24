
/*
//  문자열은 그 자체가 배열로 인식된다
const str = 'Hello';
console.log(str[o])  -->  H
console.log(str[1])  -->  e
*/

function myGame ( n ) {
   
}

myGame (35);

/*
1
2
짝(3) --> 1번
.
.
짝짝(33) --> 2번


*/

let str = '';
if( n%3==0 || n%6==0 || n%9==0 ) {
    str += '짝';
}
/* 
if( n/10 > 0 ){
    let n1 = n%10;
    let n10 = n - n%10;
} else {
    n1 = n;
    n10 = 0;
}
 */
let n1 = n/10>0? n%10 : n;
let n10 = n/10>0? n-n%10 : 0;

function clap (n) {
    if( n%3==0 || n%6==0 || n%9==0 ) {
        return '짝';
    } else {
        return '';
    }
}

let res = clap(n10) + clap(n1);

function f1 ( res, n ) {
    let cnt=0;
    for ( let i=0; i<res.length; i++ ) {
        if ( res[i]=='짝' ) {
            cnt++;
        }
        res = `${res}(${n}) --> ${cnt}번`;
    }
    if ( cnt < 1 ) {
        res = n;
    }
    return res;
}
let a = f1('짝짝',33);
console.log( a );

console.log(res);
/* 
let str = '';
str += 1;
console.log(str);
 */

let r='짝짝';
let n = 33;
let cnt = 2;
let out = `${r}(${n}) --> ${cnt}번`;

console.log(out);

console.log(4);