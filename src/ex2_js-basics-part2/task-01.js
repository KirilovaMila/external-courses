function definerType(value) {
    if (typeof value === 'number') {
        return 'number';
    }
    else if (typeof value === 'string') {
        return 'string'
    }
    else if (typeof value === NaN) {
        return undefined
    }

    return undefined
}

module.exports = definerType;