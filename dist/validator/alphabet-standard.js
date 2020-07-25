(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./alphabet", "../validatable/string/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = require("./alphabet");
    const alphabet_2 = require("../validatable/string/alphabet");
    function AlphabetStandard() {
        return new alphabet_1.default(alphabet_2.default);
    }
    exports.default = AlphabetStandard;
});
//# sourceMappingURL=alphabet-standard.js.map