
function printRevStar (max) {
    
    for ( let i=0; i<max; i++ ) {
        let str = '';

        for ( let j=0; j<max-i; j++) {
            str += '*';    
        }
        
        console.log(str);
    }
}

printRevStar(5);

/*
*****
****
***
**
*
*/

