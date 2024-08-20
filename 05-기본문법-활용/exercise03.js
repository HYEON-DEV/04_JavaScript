let sum=0;

for ( i=1; i<20; i++) {
    if ( i%2==0 || i%3==0 ) {
        console.log(i);
        sum += i;
    }
}

console.log("2 또는 3의 배수인 수의 총합 : " + sum);

