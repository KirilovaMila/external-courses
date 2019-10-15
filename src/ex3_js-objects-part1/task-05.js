function copyObj(obj) {
    var copiedObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = obj[key];
        }
    }

    return copiedObj
}

module.exports = copyObj;