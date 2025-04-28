//Write a JavaScript function to get the first element of an array.
//Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {
    if (arr.length === 0) {
      return [];
    }
    
    if (n === undefined) {
      return arr[0];
    }
    
    if (n < 0) {
      return [];
    }
    
    return arr.slice(0, n);
  }

  console.log(first([7, 9, 0, -2]));       // 7 (първият елемент)
console.log(first([], 3));               // [] (празен масив)
console.log(first([7, 9, 0, -2], 3));    // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));    // [7, 9, 0, -2] (има само 4 елемента)
console.log(first([7, 9, 0, -2], -3));   // [] (отрицателно число)
