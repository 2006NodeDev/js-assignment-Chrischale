/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let swap = false;

    for(j = 0; j < numArray.length; j++){
        let swap = false;

        for (i = 0; i < numArray.length; i++){
            if (numArray[i] > numArray[i+1]){
                temp = numArray[i];
                numArray [i] = numArray[i+1];
                numArray[i+1] = temp;
                swap = true;
            }
        }
        
    }

    console.log("sorted: " + numArray);
    return;
}

let arr = [5,6,3,2,8,11,4];
bubbleSort(arr);
  
