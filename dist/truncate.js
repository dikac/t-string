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
    /**
     * @param string
     * @param length
     * @param end
     * default "..."
     */
    const Truncate = voca_1.truncate;
    exports.default = Truncate;
});
//# sourceMappingURL=truncate.js.map