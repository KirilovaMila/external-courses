function deleteSpace(str) {
    Newstr = str.replace(/(^[\s]+|[\s]+$)/g, '');
    return Newstr
}

module.exports = deleteSpace;