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
    function String(valid, value) {
        let string = value.toString();
        if (valid) {
            return `value "${string}" is string`;
        }
        else {
            return `value "${string}" is not string`;
        }
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map