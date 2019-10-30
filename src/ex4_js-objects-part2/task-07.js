function cutString(str, n) {
    if (str.length > n) {
        cuttingStr = str.substr(0, n - 1) + '…';
    }
    return cuttingStr
}

module.exports = cutString;