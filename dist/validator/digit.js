(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = require("../validatable/digit");
    class Digit {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new digit_1.default(value, this.message);
        }
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map