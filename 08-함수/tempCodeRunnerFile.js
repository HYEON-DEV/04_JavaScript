
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
