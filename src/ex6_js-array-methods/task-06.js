function reduce(array, callback, initialValue) {
    let previousValue = 0;
    let i = 0;
    if (initialValue === undefined) {
        previousValue = array[i];
        i++;
    } else {
        previousValue = initialValue;
    };
    for (i; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    };
    return previousValue;
};

module.exports = reduce;