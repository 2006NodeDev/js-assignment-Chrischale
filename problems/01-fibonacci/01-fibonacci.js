/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    //initialize array with base values
    let fib = [0, 1];

    //handle special case of first two fib numbers being called for
    if (n == 1 | n == 2){
        console.log("nth fibonacci numner is: " + fib[n - 1]);
        return;
    }

    //if number was already calculated before, access it directnly from the array (saves time)
    if (fib[n]){
        return fib[n];
    }

    //if not in the array, manually calculate with recursion
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib [i-2]
    }

    console.log("nth fibonacci number is: " + fib[n - 1]);
    return;

}

fib(100);
fib(10);
fib(7);
fib(1000);



