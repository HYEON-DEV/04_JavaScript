const number=1;

for ( let i=2; i<10; i++ ) {

    if ( number==1 ) {
        if ( i%2 == 0 ) {
            continue;
        }
    }
    else {
        if ( i%2 != 0 ) {
            continue;
        }
    }
    
    console.group("%d단", i);
    for ( let j=1; j<10; j++ ) {
        console.log("%d x %d = %d", i, j, i*j);
    }    
    console.groupEnd();
} 

/*
for ( let i=2; i<10; i+=2 ) {
    if ( number%2 != 0  ) {
        i++;
    }
    
    console.group("%d단", i);
    for ( let j=1; j<10; j++ ) {
        console.log("%d x %d = %d", i, j, i*j);
    }    
    console.groupEnd();
    
} */


const number1 = 1;

let start = number1==2 ? 2 : 3;

for ( let i=start; i<10; i+=2 ) {
    for ( let j=1; j<10; j++ ) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}


const number2 = 1;
for ( let i=4-number2; i<10; i+=2 ) {
    for ( let j=1; j<10; j++ ) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}