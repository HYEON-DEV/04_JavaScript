
function myGame ( n, clap, out ) {
    for( let i=1; i<n; i++ ) {
        let n1 = i/10>0? i%10 : i;
        let n10 = i/10>0? i-i%10 : 0;

        let clap_res = clap(n10) + clap(n1);

        console.log( out(clap_res,i) );
    }    
}
myGame(35,clap,out);

// let n1 = n/10>0? n%10 : n;
// let n10 = n/10>0? n-n%10 : 0;


function clap (n) {
    if( n!=0 && ( n%3==0 || n%6==0 || n%9==0 ) ) {
        return '짝';
    } else {
        return '';
    }
}


function out ( res, n ) {
    let cnt = 0;

    for ( let i=0; i<res.length; i++ ) {
        if ( res[i] == '짝' ) {
            cnt++;
        }
    }

    if ( cnt > 0 ) {
        res = `${res}(${n}) --> ${cnt}번`;
    } else {
        res = n;
    }

    return res;
}

//console.log(f1('',1));
