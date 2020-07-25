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
    function NotEmpty(valid, value) {
        if (valid) {
            return `string is not empty`;
        }
        else {
            return `string must not empty`;
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map