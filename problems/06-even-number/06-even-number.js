/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    //handle negative numbers
    if (someNum < 0){
        someNum = someNum * (-1)
    }

    let i = 0;
    let flag = true;

    //set a flag that states if the value is even
    //flip flag as counter i increments one by one
    while(i < someNum){
        i++;
        flag = !flag;
    }

    return flag;

}

let j = -5;
console.log("Is " + j + " even? " + isEven(j));

let k = 10;
console.log("Is " + k + " even? " + isEven(k));

let l = 2395894825;
console.log("Is " + l + " even? " + isEven(l));