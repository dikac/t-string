var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = __importDefault(require("../validatable/alphabet"));
    class Alphabet {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new alphabet_1.default(value, this.message);
        }
    }
    exports.default = Alphabet;
});
//# sourceMappingURL=alphabet.js.map