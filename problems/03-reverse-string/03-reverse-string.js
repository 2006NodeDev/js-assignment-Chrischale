/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let rev = [];
    let len = someStr.length

    if (typeof someStr != "string"){
        console.log("Please enter a String value");
        return;
    }

    for (i = 0; i <= someStr.length; i++){
        //put last character in string into first element of array
        rev[i] = (someStr.charAt(len-1));
        len --;

    }
    //convert attay to a string before printing
    console.log("Reversed String: " + rev.join(""));
  
}

reverseStr("Chrischale is from Sri Lanka")
//check how error is handled if not a string
reverseStr(345)