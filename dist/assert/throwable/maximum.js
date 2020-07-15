(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("../../boolean/string/maximum");
    function Maximum(string, maximum, inclusive) {
        return new Error(maximum_1.default(false, string, maximum, inclusive));
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map