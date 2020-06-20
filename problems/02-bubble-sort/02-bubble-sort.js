/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let swap;
    do{
        for(j = 0; j < numArray.length; j++){
            //start with no swaps
            swap = false
    
            for (i = 0; i < numArray.length; i++){
                //if two numbers are out of order swap them
                if (numArray[i] > numArray[i+1]){
                    temp = numArray[i]
                    numArray [i] = numArray[i+1]
                    numArray[i+1] = temp
                    //since a swap was made, set the flag to true
                    swap = true
                }
            }
            
        }
        //repeat while there are still swaps being made. If swaps stop happening, break out of the loop.
    } while (swap)
    

    console.log("sorted: " + numArray);
    return;
}

let arr = [4,5,6,2,23,4,-7,2,26];
bubbleSort(arr);
  
