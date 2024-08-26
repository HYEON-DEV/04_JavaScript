
function printStar (max) {
    for ( let i=0; i<max; i++ ) {
        let str = '';

        for ( let j=0; j<i+1; j++ ) {
            str += '*';
        }
                
        console.log(str);
    }
}

printStar(5);

/*
*
**
***
****
*****
*/


function printStar (max, current=1) {
    
    if ( current > max) {
        return;
    } else {
        let star = '';
        
        for ( let j=0; j<current; j++ ) {
            star += '*';      
        }
    }

}