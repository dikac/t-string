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
    function Match(valid, value, pattern) {
        if (valid) {
            return `string is match with ${pattern}`;
        }
        else {
            return `string is not match with ${pattern}`;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map