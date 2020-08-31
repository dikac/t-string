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
    const sentences_1 = require("../../message/sentences");
    function Maximum(valid, string, maximum, inclusive, subject = 'string') {
        let sentence = new sentences_1.default(valid);
        sentence.value.push(subject);
        sentence.value.push('length');
        if (valid) {
            sentence.expectation.valid.push(`is lower`);
        }
        else {
            sentence.expectation.invalid.push(`must lower`);
        }
        if (inclusive) {
            sentence.expectation.valid.push(`or equal`);
            sentence.expectation.invalid.push(`or equal`);
        }
        sentence.type.push('than', maximum.toString());
        return sentence.message;
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map