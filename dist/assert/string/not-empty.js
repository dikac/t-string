var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = __importDefault(require("../../message/sentence"));
    function NotEmpty(valid, value, subject = 'string') {
        let sentence = new sentence_1.default(valid);
        sentence.reject = 'must not';
        sentence.accept = 'is not';
        // sentence.predicate = {
        //     invalid : 'is not',
        //     valid : 'is'
        // };
        sentence.subject = subject;
        sentence.expect = 'empty string';
        //
        // if(!valid) {
        //
        //     sentence.subject = [subject, Truncate(value, 5)].join(' ');
        // }
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map