/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let rev = [];
    let len = someStr.length
    for (i = 0; i <= someStr.length; i++){
        rev[i] = (someStr.charAt(len-1));
        len --;

    }
    console.log("Reversed String: " + rev.toString());
  
}

reverseStr("Chrischale");