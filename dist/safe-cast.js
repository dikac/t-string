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
    function SafeCast(string) {
        switch (string) {
            case null:
            case undefined:
                return '';
            default:
                return string.toString();
        }
    }
    exports.default = SafeCast;
});
//# sourceMappingURL=safe-cast.js.map