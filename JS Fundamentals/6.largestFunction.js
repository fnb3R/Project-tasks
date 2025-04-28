// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.


function findLargestAndAlert(a, b, c, d, e) {
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

    alert("The largest number is: " + largest);
}

findLargestAndAlert(10, 25, 15, 30, 20); 
findLargestAndAlert(100, 50, 75, 25, 90); 
