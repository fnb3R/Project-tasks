//    18. Write a JavaScript program to find the most frequent item of an array.

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Резултат: 'a' (5 пъти)

function mostFrequent(arr) {
    let freqMap = {};
    let maxCount = 0;
    let mostFreqItem;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        
        if (freqMap[item] === undefined) {
            freqMap[item] = 1;
        } else {
            freqMap[item]++;
        }

        if (freqMap[item] > maxCount) {
            maxCount = freqMap[item];
            mostFreqItem = item;
        }
    }

    console.log(mostFreqItem + " (" + maxCount + " times)");
}

mostFrequent(arr1);