(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = require("../../boolean/string/alphabet");
    function Alphabet(object) {
        return alphabet_1.default(object.valid, object.value);
    }
    exports.default = Alphabet;
});
//# sourceMappingURL=alphabet.js.map