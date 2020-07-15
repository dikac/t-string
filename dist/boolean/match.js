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
    function Match(source, pattern) {
        let match = source.match(pattern);
        if (match !== null) {
            return true;
        }
        return false;
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map