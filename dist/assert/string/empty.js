var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
    const truncate_1 = __importDefault(require("../../truncate"));
    const sentences_is_1 = __importDefault(require("../../message/sentences-is"));
    function Empty(valid, value, subject = 'string') {
        let sentence = sentences_is_1.default(valid);
        sentence.object.push('empty');
        sentence.subject.push(subject);
        if (!valid) {
            sentence.subject.push(truncate_1.default(value, 8));
        }
        return sentence.message;
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map