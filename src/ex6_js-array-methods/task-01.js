function slice(array, begin, end) {
    let result = [];
    let firstItem = begin;
    let lastItem = end;

    if (end === undefined || end > array.length) {
        lastItem = array.length;
    };
    if (begin === undefined) {
        firstItem = 0;
    };
    if (begin < 0) {
        firstItem += array.length;
    };
    if (end < 0) {
        lastItem += array.length;
    }; 
    for (let i = firstItem; i < lastItem; i++) {
        result.push(array[i]);
    }
    return result;
};

module.exports = slice;