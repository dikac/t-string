(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pad-option"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pad_option_1 = require("./pad-option");
    const Padding = pad_option_1.default;
    /**
     * @deprecated use original instead
     */
    exports.default = Padding;
});
//# sourceMappingURL=padding.js.map