var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = __importDefault(require("../../message/sentences"));
    function Minimum(valid, string, minimum, inclusive, subject = 'string') {
        let sentence = new sentences_1.default(valid);
        sentence.subject.push(subject);
        sentence.subject.push('length');
        if (valid) {
            sentence.accept.push(`is greater`);
        }
        else {
            sentence.reject.push(`must greater`);
        }
        if (inclusive) {
            sentence.expect.push(`or equal`);
        }
        sentence.expect.push('than', minimum.toString());
        return sentence.message;
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map