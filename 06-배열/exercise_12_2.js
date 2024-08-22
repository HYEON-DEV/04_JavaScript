
const names = [ "재석", "민영", "종민", "광수", "승기", "새정" ];
const points = [ 82, 91, 54, 62, 88, 90 ];
/* 
for ( let i=0; i<points.length-1; i++ ) {
    for ( let j=i+1; j<points.length; j++ ) {
        if( points[i] < points[j] ) {
            const p = points[i];
            points[i] = points[j];
            points[j] = p;

            const n = names[i];
            names[i] = names[j];
            names[j] = n;
        }
    }
}

console.log(names);

 */


for ( let i=0; i<points.length-1; i++ ) {
    for ( let j=0; j<points.length-1-i; j++) {
        if ( points[j] < points[j+1] ) {
            let tmp = points[j];
            points[j] = points[j+1];
            points[j+1] = tmp;

            tmp = names[j];
            names[j] = names[j+1];
            names[j+1] = tmp;
        }
    }
}
console.log(names);

