const getTheTitles = function(books) {
    const titleArray = Array.from(books, (Object) => Object.title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
