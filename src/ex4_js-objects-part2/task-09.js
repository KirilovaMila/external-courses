function insertValue (baseString, subString, index) {
    const words = baseString.split(' ')
    return baseString.replace(words[index], `${words[index]} ${subString}`)
}

module.exports = insertValue;