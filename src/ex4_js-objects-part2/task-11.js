function countChar(str) {
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === undefined) {
            count[str[i]] = 1;
        } else {
            count[str[i]]++
        }
    }
    for (key in count) {
        if (count.hasOwnProperty(key)) {
            console.log(key + ': ' + count[key]);
        }
    }
};

module.exports = countChar;