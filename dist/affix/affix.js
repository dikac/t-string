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
    var Affix;
    (function (Affix) {
        /**
         * starting, append operation
         */
        Affix[Affix["SUFFIX"] = 0] = "SUFFIX";
        /**
         * ending, prepend operation
         */
        Affix[Affix["PREFIX"] = 1] = "PREFIX";
        /**
         * both end operation
         */
        Affix[Affix["CIRCUMFIX"] = 2] = "CIRCUMFIX";
    })(Affix || (Affix = {}));
    exports.default = Affix;
});
//# sourceMappingURL=affix.js.map