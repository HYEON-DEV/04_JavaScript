/*
*********   0 9
o*******    1 7
oo*****     2 5
ooo***      3 3
oooo*       4 1          
*/


for ( let i=0; i<5; i++) {
    let str="";
    for ( let j=0; j<i; j++ ) {
        str += " ";
    }
    for ( let j=0; j<-2*i+9; j++ ) {
        str += "*"
    }
    console.log(str);
}

