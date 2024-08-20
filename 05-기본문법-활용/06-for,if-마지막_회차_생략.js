console.group('변수 < 최댓값');

for ( let i=1; i<10; i++ ) {
    if( i+1 < 10 ) {
        console.log(i);
    }
}

console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */


console.group('변수 <= 최댓값');
for ( let i=1; i<=9; i++ ) {
    if( i<9 ) {
        console.log(i);
    }
}

console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */



console.group('글자 사이에 콤마 넣기');

let str = '';

for ( let i=1; i<10; i++ ) {
    str += i;

    if ( i+1 < 10 ) {
        str += ',';
    }
}
console.log(str);

console.groupEnd();
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- */


console.group("글자 사이에 콤마(,) 넣기");

let str2 = "";
for ( let i=1; i<10; i++ ) {
    str2 += i;
    if ( i+1 < 10 ) {
        str2 += ",";
    }
}
console.log(str2);

console.groupEnd();