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
    function Empty(valid, empty, value) {
        if (empty) {
            if (valid) {
                return `string is empty`;
            }
            else {
                return `string must empty`;
            }
        }
        else {
            if (valid) {
                return `string is not empty`;
            }
            else {
                return `string must not empty`;
            }
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map