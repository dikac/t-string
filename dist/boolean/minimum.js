var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/boolean/greater", "../number/count"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = __importDefault(require("@dikac/t-number/boolean/greater"));
    const count_1 = __importDefault(require("../number/count"));
    /**
     * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
     *
     * {@param converter} is use to calculate length/size of {@param string}
     */
    function Minimum(string, minimum, inclusive, converter = count_1.default) {
        return greater_1.default(converter(string), minimum, inclusive);
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map