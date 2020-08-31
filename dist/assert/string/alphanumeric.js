(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../value/match", "../../message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("../../value/match");
    const sentences_is_1 = require("../../message/sentences-is");
    function Alphanumeric(valid, value, subject = 'string') {
        let sentence = new sentences_is_1.default(valid);
        sentence.type.push('alphanumeric');
        sentence.value.push(subject);
        if (!valid) {
            let match = new match_1.default(value, /[^a-zA-Z0-9]{1,5}/);
            if (match.valid) {
                sentence.value.push(`..${match.match[0]}..`);
            }
        }
        return sentence.message;
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map