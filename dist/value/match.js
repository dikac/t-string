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
    class Match {
        constructor(value, pattern) {
            this.value = value;
            this.pattern = pattern;
            let match = value.match(pattern);
            this.valid = match !== null;
            this.match = match ? match : [];
        }
        toString() {
            return this.value;
        }
        valueOf() {
            return this.value;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map