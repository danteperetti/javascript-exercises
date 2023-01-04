const sumAll = function(firstInt, secondInt) {
    let finalSum = 0;
    if (firstInt < 0 || secondInt < 0) {
        return 'ERROR';
    } else if (typeof firstInt !== 'number' || typeof secondInt !== 'number') {
        return 'ERROR'; 
    } else if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            finalSum += i;
        }
    } else if (firstInt > secondInt) {
        for (let i = secondInt; i <= firstInt; i++) {
            finalSum += i;
        }
    } 
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
