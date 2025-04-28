//Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sumArray(arr) {
    if (arr.length === 3) {
        return arr[0] + arr[1] + arr[2];
    } else {
        return "Array must have exactly 3 elements";
    }
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 20, 30])); // 60
console.log(sumArray([5, 5, 5])); // 15
console.log(sumArray([1, 2])); // "Array must have exactly 3 elements"