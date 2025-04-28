//Write a JavaScript program to find the larger number from the two given positive integers, 
//the two numbers are in the range [40;60] inclusive.

function findLargerNumber(num1, num2) {
    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
        return Math.max(num1, num2);
    } else {
        return "Numbers are out of range";
    }
}

console.log(findLargerNumber(45, 55)); // 55
console.log(findLargerNumber(60, 40)); // 60
console.log(findLargerNumber(30, 50)); // "Numbers are out of range"