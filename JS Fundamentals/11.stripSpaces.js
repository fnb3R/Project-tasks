// Write a JavaScript function to strip leading and trailing spaces from a string.

function stripSpaces (str) {
    return str.trim();
}

console.log(stripSpaces("   Проба проба   "));


let myString = "   Some text with spaces    ";
let cleanedString = stripSpaces(myString);
console.log(cleanedString);