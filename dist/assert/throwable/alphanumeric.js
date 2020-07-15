(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = require("../../boolean/string/alphanumeric");
    function Alphanumeric(string) {
        return new Error(alphanumeric_1.default(false, string));
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map