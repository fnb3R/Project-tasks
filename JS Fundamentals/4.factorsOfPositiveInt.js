//Write a JavaScript function to compute the factors of a positive integer.

function getFactors(n) {
    let factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }

    return factors;

}

console.log(getFactors(16));