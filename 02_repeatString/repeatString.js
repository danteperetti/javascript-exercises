const repeatString = function(string, num) {
    if (num > 0) {
        let loopString = string;
        for(let i = 1; i < num; i++) {
            loopString += string;
        }
        return loopString;
    } else if (num < 0){
        return 'ERROR';
    } else {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
