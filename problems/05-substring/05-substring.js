/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let retstr = [];
    for (i = startIndex; i < endIndex; i++){
        retstr.push(someStr.charAt(i));
    }
    return retstr.join("");
}

let s = "chrischale";

console.log("substirng is " + substring(s, 3, 8));