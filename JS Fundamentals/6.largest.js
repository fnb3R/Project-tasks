// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.

let a = 10, b = 25, c = 15, d = 30, e = 20;

let largest;

if (a > b && a > c && a > d && a > e) {
    largest = a;
} else if (b > c && b > d && b > e) {
    largest = b;
} else if (c > d && c > e) {
    largest = c;
} else if (d > e) {
    largest = d;
} else {
    largest = e;
}

//alert("The largest number is: " + largest);
console.log("The largest number is: " + largest);