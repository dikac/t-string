(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("./match");
    function Numeric(source) {
        return match_1.default(source, /^[-+]*\d*(\.\d*)?$/i);
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map