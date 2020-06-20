/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  let pal = true;

  //remove spaces in the string
  //NOTE: assuming string won't have punctuation!
  let str = someStr.split(" ").join("");
  let length = str.length;

  //figure out where midpoint on stirng should be
  if (length%2 == 0){
      j = length/2;
  }else{
      j = (length/2) - 1;
  }

  for (i = 0; i < j; i++){   
      //compare opposite end strings   
      if (str.charAt(i) == str.charAt(length-i-1)){
          pal = true;
      }else{
          //if even a single mismatch is found, terminate
          pal = false;
          break;
      }
  }

  return pal;

}

let str = "a santa at nasa";
console.log(isPalindrome(str));
