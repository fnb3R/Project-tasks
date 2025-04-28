// According to Wikipedia a happy number is defined by the following process: 
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
// Write a JavaScript program to find and print the first 5 happy numbers.

function isHappyNumber(num) {
    let seenNumbers = new Set();

    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        num = sumOfSquares(num);
    }

    return num === 1;
}

function sumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => {
      return sum + Math.pow(parseInt(digit), 2);
    }, 0);
  }

  let count = 0;
let number = 1;

while (count < 5) {
  if (isHappyNumber(number)) {
    console.log(number + " is a happy number");
    count++;
  }
  number++;
}