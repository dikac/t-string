var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./numeric", "../validatable/string/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = __importDefault(require("./numeric"));
    const numeric_2 = __importDefault(require("../validatable/string/numeric"));
    function NumericStandard() {
        return new numeric_1.default(numeric_2.default);
    }
    exports.default = NumericStandard;
});
//# sourceMappingURL=numeric-standard.js.map