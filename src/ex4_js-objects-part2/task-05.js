function findSubstring(str, substr) {
    if (str.match(substr)) {
        return true
    }
    return false
}

module.exports = findSubstring;