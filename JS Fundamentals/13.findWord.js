//Write a JavaScript function to find a word within a string.

//Първи вариант, в който няма значение дали думата е с главни или малки букви при търсене:

function findWordCaseInsensitive(text, word) {
    return text.toLowerCase().includes(word.toLowerCase());
} //връща true или false съответно ако намери думата или я няма

console.log(findWordCaseInsensitive("Banana BANANA baNana", "banana")); //true

//Втори вариант - да показва на кои места среща търсената дума:

function findAllOccurrences(text, word) {
    const positions = [];
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();

    let position = lowerText.indexOf(lowerWord);

    while (position !== -1) { //indexOf() връща -1, когато няма повече срещания.
        positions.push(position);
        position = lowerText.indexOf(lowerWord, position + 1); //започваме търсенето от следващата позиция с position + 1
    }

    return positions;
}

console.log(findAllOccurrences("Banana BANANA baNana", "banana"));
// [0, 7, 14] (намира се на първа, 7-ма и 14-та позиция)

console.log(findAllOccurrences("Banana - this is a BANAna, I like bananas", "banana"));
//[ 0, 19, 34 ]