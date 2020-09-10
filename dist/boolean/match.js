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
    /**
     * match string {@param string} against {@param pattern}
     *
     * @param string
     * @param pattern
     */
    function Match(string, pattern) {
        let match = string.match(pattern);
        if (match !== null) {
            return true;
        }
        return false;
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map