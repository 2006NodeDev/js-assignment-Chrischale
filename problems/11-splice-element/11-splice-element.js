/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //return someArr.splice(index);

    let ret = [];
    for (let i = index; i<someArr.length; i++){
        ret.push(someArr[i]);
    }
    return ret;
  
}

const arr = ['jenn', 'percy', 'mangnolia', 42, 76, true]
console.log(spliceElement(arr, 4))
//Note to self: "index" parameter implies the ith element in the array not the element at arr[index]
