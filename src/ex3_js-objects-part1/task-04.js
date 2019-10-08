function checkProperty(prop, obj) {
    const newObj = obj

    if (!obj.hasOwnProperty(prop)) {
        newObj[prop] = 'new'
    }
    return newObj
}

module.exports = checkProperty;