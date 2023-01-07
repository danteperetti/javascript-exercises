const palindromes = function (string) {
    const cleanString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").toLowerCase();
    const noSpaces = removeSpaces(cleanString);
    const reversedString = noSpaces.split('').reverse().join('');
    
    if(noSpaces === reversedString) {
        return true;
    } else {
        return false;
    }

    function removeSpaces(string) {
        let stringArray = string.split('');
        let filtered = stringArray.filter(string => string !== ' ');
        return filtered.join('');
    }
};

// Do not edit below this line
module.exports = palindromes;
