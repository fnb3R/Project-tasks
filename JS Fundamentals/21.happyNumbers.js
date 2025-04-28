// According to Wikipedia a happy number is defined by the following process: 
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
// Write a JavaScript program to find and print the first 5 happy numbers.

function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10; // взимаме последната цифра
      sum += digit * digit; // добавяме квадрата на цифрата към сумата
      num = Math.floor(num / 10); // премахваме последната цифра
    }
    return sum; //връщаме сумата от квадратите на цифрите
  }
  
  function isHappyNumber(num) {
    let seen = []; // масив, който ще следи числата, които сме срещали вече
    while (num !== 1 && !seen.includes(num)) { //ако числото е едно е щастливо, а ако сме го срещали трябва да излезем от цикъла
      seen.push(num); // добавяме текущото число към масива
      num = sumOfSquares(num); // актуализираме числото със сбора от квадратите
    }
    return num === 1; // ако числото е 1, то е щастливо
  }
  
  function findHappyNumbers(count) {
    let happyNumbers = [];
    let num = 1;
    
    while (happyNumbers.length < count) {
      if (isHappyNumber(num)) {
        happyNumbers.push(num);
      }
      num++;
    }
    
    return happyNumbers;
  }
  
  const first5HappyNumbers = findHappyNumbers(5);
  console.log(first5HappyNumbers);
  