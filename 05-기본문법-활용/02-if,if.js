const point = 78;

if ( point >= 70 ) {
    console.log('패스');

    if ( point > 90 ) {
        console.log('A');
    } else if ( point > 80 ) {
        console.log('B');
    } else {
        console.log('C');
    }    
} else {
    console.log('논패스');
}
