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
    function Suffix(string, suffix) {
        string = string.slice(-suffix.length);
        return string === suffix;
    }
    exports.default = Suffix;
});
//# sourceMappingURL=suffix.js.map