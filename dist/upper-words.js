var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./upper-first"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const upper_first_1 = __importDefault(require("./upper-first"));
    function UpperWords(string, split) {
        for (let separator of string.match(split) || []) {
            string = string.split(separator).map(upper_first_1.default).join(separator);
        }
        return upper_first_1.default(string);
    }
    exports.default = UpperWords;
});
//# sourceMappingURL=upper-words.js.map