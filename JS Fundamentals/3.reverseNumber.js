//Write a JavaScript function that reverse a number.

function reverseNumber(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}

function reverseNumberB(num) {
    let isNegative = num < 0;
    let reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return isNegative ? -reversed : reversed;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(9876));  // 6789
console.log(reverseNumber(100));   // 1
console.log(reverseNumber(-123));  // 321


console.log(reverseNumberB(-123));  // -321
console.log(reverseNumberB(456));   // 654
console.log(reverseNumberB(100));   // 1
