(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphabet", "@dikac/t-function/assert/parameter", "./throwable/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = require("../boolean/alphabet");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    const alphabet_2 = require("./throwable/alphabet");
    function Alphabet(value, error = alphabet_2.default) {
        parameter_1.default(value, alphabet_1.default, error);
    }
    exports.default = Alphabet;
});
//# sourceMappingURL=alphabet.js.map