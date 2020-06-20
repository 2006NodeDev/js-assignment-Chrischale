/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  let fact = sumNum;

  //special case of factorial of 1
  if (sumNum == 1){
      fact = 1;
  }else{
    //recursive call to factorial()
        fact = sumNum * factorial(sumNum-1);

  }

  return fact;
}

let j = 7;
console.log("factorial of " + j + " is " + factorial(j));