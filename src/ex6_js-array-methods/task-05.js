function map(array, callback) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray[i] = callback(array[i], i, array);     
    }
    return resultArray;
};
module.exports = map;