module.exports = (function () {
    "use strict";

    function add(x, y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }
    return { add, subtract };
})()