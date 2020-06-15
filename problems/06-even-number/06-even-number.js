/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let i = 0;
    let flag = true;
    while(i<someNum){
        flag = !flag;
        i++;
    }

    return flag;

}
let j = 5;
console.log("Is " + j + " even? " + isEven(j));