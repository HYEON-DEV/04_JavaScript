for ( i=0; i<4; i++ ) {
    let str = "";

    for ( j=0; j<4; j++ ) {
        str += i+j + " ";
    }
    
    console.log(str);
}

/* -- -- -- -- -- -- -- -- -- -- -- -- */


for ( let i=0; i<4; i++ ) {
    let str="";
    for ( let j=0; j<4; j++ ) {
        str += i+j;
        if ( j+1 < 4 ) {
            str += " ";
        }
    }
    console.log(str);
}




/* -- -- -- -- -- -- -- -- -- -- -- -- */
for ( let i=0; i<4; i++) {
    let str="";

    for( let j=i; j<i+4; j++ ) {
        str += j;

        if ( j+1 < i+4 ) {
            str += " ";
        }
    }
    console.log(str);
}
