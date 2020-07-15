(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/boolean/lower", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("@dikac/t-number/boolean/lower");
    const size_1 = require("../number/size");
    /**
     * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
     *
     * {@param converter} is use to calculate length/size of {@param string}
     */
    function Maximum(string, maximum, inclusive, converter = size_1.default) {
        return lower_1.default(converter(string), maximum, inclusive);
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map