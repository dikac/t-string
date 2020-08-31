(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../message/sentence", "../../truncate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("../../message/sentence");
    const truncate_1 = require("../../truncate");
    function NotEmpty(valid, value, subject = 'string') {
        let sentence = new sentence_1.default(valid);
        sentence.expectation = {
            invalid: 'is not',
            valid: 'is'
        };
        sentence.value = subject;
        sentence.type = 'empty';
        if (!valid) {
            sentence.value = [subject, truncate_1.default(value, 5)].join(' ');
        }
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map