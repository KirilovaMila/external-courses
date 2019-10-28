function findProp(prop, obj) {
    const parentObj = Object.getPrototypeOf(obj)
    if (!parentObj.hasOwnProperty(prop)) {
        return undefined
    }
    return parentObj[prop]
}

module.exports = findProp;