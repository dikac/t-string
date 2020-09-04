(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "voca"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const voca_1 = require("voca");
    const PadCircumfix = voca_1.pad;
    exports.default = PadCircumfix;
});
//# sourceMappingURL=pad-circumfix.js.map