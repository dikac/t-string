(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../truncate", "../../message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const truncate_1 = require("../../truncate");
    const sentences_is_1 = require("../../message/sentences-is");
    function Empty(valid, value, subject = 'string') {
        let sentence = new sentences_is_1.default(valid);
        sentence.type.push('empty');
        sentence.value.push(subject);
        if (!valid) {
            sentence.value.push(truncate_1.default(value, 8));
        }
        return sentence.message;
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map