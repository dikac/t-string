(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/maximum", "@dikac/t-function/assert/parameter-arguments", "./throwable/maximum", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("../boolean/maximum");
    const parameter_arguments_1 = require("@dikac/t-function/assert/parameter-arguments");
    const maximum_2 = require("./throwable/maximum");
    const size_1 = require("../number/size");
    function Maximum(value, maximum, inclusive, converter = size_1.default, error = maximum_2.default) {
        let guard = (value, maximum, inclusive) => {
            return maximum_1.default(value, maximum, inclusive, converter);
        };
        parameter_arguments_1.default(value, guard, error, [maximum, inclusive, converter]);
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map