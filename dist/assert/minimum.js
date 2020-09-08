var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/minimum", "@dikac/t-function/assert/callback", "./throwable/minimum", "../number/count"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = __importDefault(require("../boolean/minimum"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const minimum_2 = __importDefault(require("./throwable/minimum"));
    const count_1 = __importDefault(require("../number/count"));
    function Minimum(value, minimum, inclusive, converter = count_1.default, error = minimum_2.default) {
        let guard = (value, minimum, inclusive) => {
            return minimum_1.default(value, minimum, inclusive, converter);
        };
        callback_1.default(value, guard, error, minimum, inclusive);
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map