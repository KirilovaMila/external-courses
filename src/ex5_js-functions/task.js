let Calculator = {

    construtor(a = 0) {
        this.a = a
    },

    add: function result(b) {
        if (b === undefined) {
            return result;
        }
        Calculator.a += b;
        return result
    },

    subtract: function result(b) {
        if (b === undefined) {
            return result;
        }
        Calculator.a -= b;
        return result
    },

    divide: function result(b) {
        if (b === undefined) {
            return result;
        }
        if (b !== 0 ) {
        Calculator.a /= b;
        }
        return result
    },

    multiply: function result(b) {
        if (b === undefined) {
            return result;
        }
        Calculator.a *= b;
        return result
    },

    getResult: function () {
        return this.a
    },
    reset: function () {
        this.a = 0
    },
};

module.exports = Calculator