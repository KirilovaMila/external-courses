function searchProperty(prop, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(prop)) {
            return true
        }
    }
    return false
}

module.exports = searchProperty;