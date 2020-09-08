var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = __importDefault(require("./sentences"));
    /**
     * create {@see Sentences} with default predicate {invalid : ['is not'], valid : ['is']}
     * @param valid
     * @param subject
     * @param predicate
     * @param value
     */
    function SentencesIs(valid, subject = [], predicate = { invalid: ['is not'], valid: ['is'] }, value = []) {
        return new sentences_1.default(valid, subject, predicate, value);
    }
    exports.default = SentencesIs;
});
//# sourceMappingURL=sentences-is.js.map