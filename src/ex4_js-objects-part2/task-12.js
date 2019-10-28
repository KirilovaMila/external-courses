function roundingNumber(num1, num2) {
    let num = num1 + num2;
    return parseFloat(num.toFixed(3))
}

module.exports = roundingNumber;