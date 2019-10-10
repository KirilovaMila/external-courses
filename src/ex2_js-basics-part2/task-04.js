function isEqual(array) {
    let result = true;
    if (array.length !== 0) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] !== array[i + 1]) {
                result = false;
                break;
            }
        }
    }
    return result
}

module.exports = isEqual;