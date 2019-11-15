let Calculator = {

    a: 0,

    add: function add(b) {
        if (b !== undefined) {
            Calculator.a += b;
        }
        return add;
    },

    subtract: function subtract(b) {
        if (b !== undefined) {
            Calculator.a -= b;
        }
        return subtract;
    },

    divide: function divide(b) {
        if (b !== undefined && b !== 0) {
            Calculator.a /= b;
        }
        return divide;

    },

    multiply: function multiply(b) {
        if (b !== undefined) {
            Calculator.a *= b;
        }
        return multiply
    },

    getResult: function () {
        return Calculator.a
    },
    reset: function () {
        Calculator.a = 0
    },
};

module.exports = Calculator;