function filter(array, callback) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            resultArray.push(array[i])
        }
    }
    return resultArray;
};
module.exports = filter;