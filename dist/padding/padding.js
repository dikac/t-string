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
    var Padding;
    (function (Padding) {
        Padding[Padding["SUFFIX"] = 0] = "SUFFIX";
        Padding[Padding["PREFIX"] = 1] = "PREFIX";
        Padding[Padding["AFFIX"] = 2] = "AFFIX";
    })(Padding || (Padding = {}));
    exports.default = Padding;
});
//# sourceMappingURL=padding.js.map