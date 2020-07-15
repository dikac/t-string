(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Digit(valid, value) {
        if (valid) {
            return `string is digit`;
        }
        else {
            return `string is not digit`;
        }
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map