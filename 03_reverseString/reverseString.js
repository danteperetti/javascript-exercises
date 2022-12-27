const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = stringArray.reverse();
    let newString = '';
    for (char of reverseArray) {
        newString += [char];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
