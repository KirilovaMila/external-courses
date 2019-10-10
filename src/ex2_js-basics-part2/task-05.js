function findMaxElement(array) {
    let i;
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            var maxElement = array[i];
        }
    }
    return maxElement
}

module.exports = findMaxElement;