/*
oooo*       4 1          
ooo***      3 3
oo*****     2 5
o*******    1 7
*********   0 9
*/



for ( let i=0; i<5; i++ ) {
    let str="";
    for ( let j=0; j<5-i-1; j++ ) {
        str += " ";
    }
    for ( let k=0; k<2*i+1; k++ ) {
        str += "*";
    }
    console.log(str);
}



