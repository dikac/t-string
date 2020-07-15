(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = require("../../boolean/string/numeric");
    function Numeric(string) {
        return new Error(numeric_1.default(false, string));
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map