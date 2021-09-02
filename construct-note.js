// add whatever parameters you deem necessary

function makeFrequencyCounter(string) {
    // Empty Object
    let frequencyCounter = {};
    // Loop over array per char
    for(char of string) {
        // set key, value where key is char and value is frequency.
        // if value is null then set to 1 otherwise add 1.
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }
    return frequencyCounter;
}

function constructNote(message, letters) {
    // Can the letters be removed to make a message, yes by deducting the value from letters
    // iterate over message for each key, value pair comparing it with letters
    // if exists in letters, if letters frequency is equal or greater than in message 
    // return true otherwise return false.
    const messageFrequencyCounter = makeFrequencyCounter(message);
    const lettersFrequencyCounter = makeFrequencyCounter(letters);

    // Loops through the keys of message to compare with letters
    for(key in message) {
        // Retrieve key from letters
        // Compare if the value that is retrieved is equal or greater
    }
}
