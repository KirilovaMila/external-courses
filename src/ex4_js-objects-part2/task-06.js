function upperCaseWord(str) {
    return str
        .split(' ')
        .map(function (arrayWords) {
            return arrayWords[0].toUpperCase() + arrayWords.substr(1);
        })
        .join(' ');
}

module.exports = upperCaseWord;
