// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

function swapAdjacentDigits(num) {
    let numStr = num.toString();

    if (numStr.length % 2 !== 0) {
        return "Number must have an even length!"
    }

    let swappedStr = '';
    for (let i = 0; i < numStr.length; i+= 2) {
        swappedStr += numStr[i + 1] + numStr[i];
    }

    return parseInt(swappedStr);
}

console.log(swapAdjacentDigits(123456)); // 214365
console.log(swapAdjacentDigits(987654)); // 978654
console.log(swapAdjacentDigits(12345));  // "Number must have an even length"