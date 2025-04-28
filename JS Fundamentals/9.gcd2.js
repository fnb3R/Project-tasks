// Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

//В този случай числата не трябва да са много големи

console.log(gcd(8, 12)); //4
console.log(gcd(56, 98)); //14
console.log(gcd(101, 10)); //1
console.log(gcd(1048, 256)); //8