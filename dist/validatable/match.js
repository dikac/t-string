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
        constructor(source, pattern) {
            this.source = source;
            this.pattern = pattern;
            this._valid = false;
            let match = source.match(pattern);
            if (match !== null) {
                this.result = match;
                this._valid = true;
            }
        }
        get value() {
            return this.source;
        }
        get valid() {
            return this._valid;
        }
        toString() {
            return this.source;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map