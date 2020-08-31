(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = require("../../assert/string/alphanumeric");
    function Alphanumeric(object) {
        return alphanumeric_1.default(object.valid, object.value);
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map