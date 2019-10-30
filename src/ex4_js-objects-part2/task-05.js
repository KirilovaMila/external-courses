function findSubstring(str, substr) {
    return Boolean(str.match(substr))
}

module.exports = findSubstring;