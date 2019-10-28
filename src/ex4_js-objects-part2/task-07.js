function cutString(str, n) {
    if (str.length > n) {
        Newstr = str.substr(0, n - 1) + '…';
    }

    return Newstr
}

module.exports = cutString;