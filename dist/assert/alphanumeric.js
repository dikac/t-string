(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphanumeric", "@dikac/t-function/assert/parameter", "./throwable/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = require("../boolean/alphanumeric");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    const alphanumeric_2 = require("./throwable/alphanumeric");
    function Alphanumeric(value, error = alphanumeric_2.default) {
        parameter_1.default(value, alphanumeric_1.default, error);
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map