var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./minimum", "../validatable/string/minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = __importDefault(require("./minimum"));
    const minimum_2 = __importDefault(require("../validatable/string/minimum"));
    function MinimumStandard(minimum, inclusive) {
        return new minimum_1.default(minimum, inclusive, minimum_2.default);
    }
    exports.default = MinimumStandard;
});
//# sourceMappingURL=minimum-standard.js.map