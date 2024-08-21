/*
oooo*          
ooo**
oo***
*/


for ( let i=0; i<5; i++ ) {
    let str="";
    
    for ( let j=0; j<5-i-1; j++ ) {
        str += " ";
    }
    for ( let k=0; k<i+1; k++) {
        str += "*";
    }

    console.log(str);
}

