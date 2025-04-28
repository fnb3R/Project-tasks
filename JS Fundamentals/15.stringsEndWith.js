//Write a JavaScript function to test whether a string ends with a specified string.

function endsWith(str, ending) {
    return str.endsWith(ending);
} // връща true или false

console.log(endsWith('Hello, world', 'world')); // true
console.log(endsWith('Hello, world', 'hello')); //false