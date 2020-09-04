(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/maximum", "@dikac/t-function/assert/callback", "./throwable/maximum", "../number/count"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("../boolean/maximum");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const maximum_2 = require("./throwable/maximum");
    const count_1 = require("../number/count");
    function Maximum(value, maximum, inclusive, converter = count_1.default, error = maximum_2.default) {
        let guard = (value, maximum, inclusive) => {
            return maximum_1.default(value, maximum, inclusive, converter);
        };
        callback_1.default(value, guard, error, maximum, inclusive);
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map