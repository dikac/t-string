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
    function Minimum(valid, string, minimum, inclusive) {
        let parts = [];
        parts.push(`string length`);
        if (valid) {
            parts.push(`is greater`);
        }
        else {
            parts.push(`must greater`);
        }
        if (inclusive) {
            parts.push('or equal');
        }
        parts.push(`than "${minimum}"`);
        return parts.join(' ');
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map