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
            this.captured = '';
            this._valid = false;
            let match = source.match(pattern);
            if (match !== null) {
                this.captured = match[0];
                this._valid = true;
            }
        }
        get valid() {
            return this._valid;
        }
        toString() {
            return this.captured;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map