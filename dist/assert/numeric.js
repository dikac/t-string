(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/numeric", "@dikac/t-function/assert/callback", "./throwable/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = require("../boolean/numeric");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const numeric_2 = require("./throwable/numeric");
    function Numeric(value, error = numeric_2.default) {
        callback_1.default(value, numeric_1.default, error);
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map