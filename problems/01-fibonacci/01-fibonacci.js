/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    let fib = [0, 1];
    if (n == 1 | n == 2){
        console.log("nth fibonacci numner is: " + fib[n - 1]);
        return;
    }

    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib [i-2]
    }

    console.log("nth fibonacci number is: " + fib[n - 1]);
    return;

}

fib(1);

