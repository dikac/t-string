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
     * create {@see Sentences} with some populated data
     * {@see Sentences.reject} set to ['must']
     * {@see Sentences.accept} set to ['is']
     *
     * @param valid
     * @param subject
     * @param expect
     * @param actual
     */
    function SentencesMust(valid, subject = [], expect = [], actual = []) {
        return new sentences_1.default(valid, subject, expect, ['is'], ['must'], actual);
    }
    exports.default = SentencesMust;
});
//# sourceMappingURL=sentences-must.js.map