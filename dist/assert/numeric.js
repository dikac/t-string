(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/numeric", "@dikac/t-function/assert/parameter", "./throwable/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = require("../boolean/numeric");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    const numeric_2 = require("./throwable/numeric");
    function Numeric(value, error = numeric_2.default) {
        parameter_1.default(value, numeric_1.default, error);
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map