/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  
  switch(shape){
    case "Square":
      for (i = 0; i<height; i++){
        let str = "";
        for (j = 0; j < height; j++){
          str += character;

        }
        console.log(str);
      }
      break;

    case "Triangle":
      for(i = 1; i <= height; i++){
        let x = 1;
        let str = "" ;
          do{
            str += character;
            x++;
          }while(x <= i)
        console.log(str);
      }
      break;

    case "Diamond":
      //keep track of number of char to print in each row
      let i = 1;
      
      //build first half of diamond
      while(i <= height) {
        //counter1 keeps track of how many spaces to print in each row
        let c1 = (height - i)/2;
        let str = "";

        for(let a = 0; a < c1; a++){
          str+= " "
        }

        for (let b = 0; b < i; b++){
          str+= character;
        }

        console.log(str)

        //increment by 2 to keep the number of chars odd i.e. 1, 3, 5, 7 ..
        i += 2;
        
      }
     
      
      //build second half of diamond
      while(i >= 2) {
        let str = "";
        i = i - 2;
        //counter 2 keeps track of spaces for second half
        let c2 = (height - i)/2;
        //don't print middle line twice if its an odd height
        if(i < height) {                   
          for(let a = 0; a < c2; a++){
            str+= " "
          }
  
          for (let b = 0; b < i; b++){
            str+= character;
          }

          console.log(str)
        } 
      }
      
        

    
    
    }
  
}


printShape("Diamond", 7, "#");
printShape("Diamond", 5, "#");
printShape("Diamond", 10, "#");
printShape("Diamond", 1, "#");