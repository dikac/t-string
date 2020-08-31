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
    function Match(valid, value, pattern, subject = 'string') {
        let sentence = new sentence_1.default(valid);
        sentence.expectation.invalid = 'does not match against';
        sentence.expectation.valid = 'match against';
        sentence.type = pattern.source;
        sentence.value = [subject, truncate_1.default(value, 8)].join(' ');
        return sentence.message;
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map