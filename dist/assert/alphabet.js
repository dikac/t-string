var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphabet", "@dikac/t-function/assert/callback", "./throwable/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = __importDefault(require("../boolean/alphabet"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const alphabet_2 = __importDefault(require("./throwable/alphabet"));
    function Alphabet(value, error = alphabet_2.default) {
        callback_1.default(value, alphabet_1.default, error);
    }
    exports.default = Alphabet;
});
//# sourceMappingURL=alphabet.js.map