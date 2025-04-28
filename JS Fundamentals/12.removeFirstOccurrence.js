//Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index === -1) return str;
    return str.slice(0, index) + str.slice(index + searchStr.length);
}

console.log(removeFirstOccurrence("Hello world, welcome to the world!", "world"));
//Hello , welcome to the world!

console.log(removeFirstOccurrence("Nothing to remove here", "test"));
//Nothing to remove here

console.log(removeFirstOccurrence("Banana banana banana", "banana"));
//Banana  banana 

//Тъй като се получават повече space-ове, отколкото са необходими ето преработен код, с който се изчистват:

function removeFirstOcc(string, searchString) {
    const index = string.indexOf(searchString);
    if (index === -1) return string;

    let start = index;
    let end = index + searchString.length;

    if (string[end] === ' ') {
        end += 1;
    } else if (start > 0 && string[start - 1] === ' ') {
        start -= 1;
    }

    return string.slice(0, start) + string.slice(end);
}
console.log(removeFirstOcc("Hello world, welcome to the world!", "world"));
// Hello, welcome to the world!

console.log(removeFirstOcc("Nothing to remove here", "test"));
//Nothing to remove here

console.log(removeFirstOcc("Banana banana banana", "banana"));
//Banana banana

