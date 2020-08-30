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
    function Prefix(string, prefix) {
        string = string.slice(0, prefix.length);
        return string === prefix;
    }
    exports.default = Prefix;
});
//# sourceMappingURL=prefix.js.map