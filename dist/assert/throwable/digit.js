(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = require("../string/digit");
    function Digit(string, subject = 'string') {
        return new Error(digit_1.default(false, string, subject));
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map