var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = __importDefault(require("../string/minimum"));
    function Minimum(string, minimum, inclusive, subject = 'string') {
        return new Error(minimum_1.default(false, string, minimum, inclusive, subject));
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map