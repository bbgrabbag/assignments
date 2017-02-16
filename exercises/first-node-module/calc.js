module.exports = {
    add: function (x, y) {
        Number(x);
        Number(y);
        return (x + y);
    },
    subtract: function (x, y) {
        Number(x);
        Number(y);
        return x - y;
    },
    multiply: function (x, y) {
        Number(x);
        Number(y);
        return x * y;
    },
    divide: function (x, y) {
        Number(x);
        Number(y);
        return x / y;
    },
    exponentiate: function (x, y) {
        Number(x);
        Number(y);
        var z = 1;
        for (var i = 0; i < y; i++) {
            var z = x * z;
        }
        return z;
    }
};