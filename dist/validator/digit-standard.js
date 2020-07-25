(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./digit", "../validatable/string/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = require("./digit");
    const digit_2 = require("../validatable/string/digit");
    function DigitStandard() {
        return new digit_1.default(digit_2.default);
    }
    exports.default = DigitStandard;
});
//# sourceMappingURL=digit-standard.js.map