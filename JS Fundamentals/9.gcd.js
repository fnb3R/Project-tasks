// Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    
    return gcd(b, a % b);
}

console.log(gcd(8, 12)); //4
console.log(gcd(56, 98)); //14
console.log(gcd(101, 10)); //1
console.log(gcd(1048, 256)); //8