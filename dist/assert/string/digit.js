var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../value/match", "../../message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("../../value/match"));
    const sentences_must_1 = __importDefault(require("../../message/sentences-must"));
    function Digit(valid, value, subject = 'string') {
        let sentence = sentences_must_1.default(valid);
        sentence.expect.push('digit');
        sentence.subject.push(subject);
        sentence.comma.push('expect');
        if (!valid) {
            let match = new match_1.default(value, /[^0-9]{1,5}/);
            if (match.valid) {
                sentence.actual.push('contains', `"${match.match[0]}"`);
            }
        }
        return sentence.message;
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map