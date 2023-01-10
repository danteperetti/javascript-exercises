const fibonacci = function(input) {
    let fibNumber = parseInt(input), highNum = 1, lowNum = 0, tempNum;
    if (fibNumber < 0) {
        return 'OOPS';
    } else {
        for (;fibNumber > 0; fibNumber--) {
            tempNum = highNum;
            highNum = highNum + lowNum;
            lowNum = tempNum;
        }
        return lowNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
