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
    function UpperFirst(string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    exports.default = UpperFirst;
});
//# sourceMappingURL=upper-first.js.map