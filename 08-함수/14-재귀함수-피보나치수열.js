
function fibonacci(n) {
    if (n<2 ) {
        return n;
    } else {
        let res = fibonacci(n-1) + fibonacci(n-2);
        console.log(`f(${n}) = f(${n-1}) + f(${n-2}) = ${res}`);
        
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(3));

