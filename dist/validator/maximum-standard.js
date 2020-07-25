(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./maximum", "../validatable/string/maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("./maximum");
    const maximum_2 = require("../validatable/string/maximum");
    function MaximumStandard(maximum, inclusive) {
        return new maximum_1.default(maximum, inclusive, maximum_2.default);
    }
    exports.default = MaximumStandard;
});
//# sourceMappingURL=maximum-standard.js.map