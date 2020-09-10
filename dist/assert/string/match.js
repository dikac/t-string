var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../truncate", "../../message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const truncate_1 = __importDefault(require("../../truncate"));
    const sentences_1 = __importDefault(require("../../message/sentences"));
    function Match(valid, value, pattern, subject = 'string') {
        let sentence = new sentences_1.default(valid);
        sentence.reject.push('does not match against');
        sentence.accept.push('match against');
        sentence.expect.push(pattern.source);
        sentence.subject.push(subject, `"${truncate_1.default(value, 8)}"`);
        return sentence.message;
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map