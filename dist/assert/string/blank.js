var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../truncate", "../../message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const truncate_1 = __importDefault(require("../../truncate"));
    const sentences_must_1 = __importDefault(require("../../message/sentences-must"));
    function Blank(valid, value, subject = 'string') {
        let sentence = sentences_must_1.default(valid);
        sentence.expect.push('blank', 'string');
        sentence.subject.push(subject);
        sentence.comma.push('expect');
        if (!valid && value.length) {
            sentence.actual.push('actual', `"${truncate_1.default(value, 8)}"`);
        }
        return sentence.message;
    }
    exports.default = Blank;
});
//# sourceMappingURL=blank.js.map