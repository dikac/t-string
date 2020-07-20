(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../safe-cast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const safe_cast_1 = require("../../safe-cast");
    function String(valid, value, conversion = safe_cast_1.default) {
        let string = conversion(value);
        if (valid) {
            return `value "${string}" is string`;
        }
        else {
            return `value "${string}" is not string`;
        }
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map