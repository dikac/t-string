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
     * string implementation of {@see Sentences}
     */
    class Sentence {
        /**
         * @see Sentences
         */
        constructor(valid, subject = '', expect = '', actual = '', accept = 'is', reject = 'must', accepts = ['subject', 'reject', 'accept', 'expect'], rejects = ['subject', 'reject', 'accept', 'expect', 'actual'], comma = []) {
            this.valid = valid;
            this.subject = subject;
            this.expect = expect;
            this.actual = actual;
            this.accept = accept;
            this.reject = reject;
            this.accepts = accepts;
            this.rejects = rejects;
            this.comma = comma;
        }
        valueOf() {
            return this.message;
        }
        toString() {
            return this.message;
        }
        get message() {
            return new sentences_1.default(this.valid, [this.subject], [this.expect], [this.accept], [this.reject], [this.actual], this.accepts, this.rejects, this.comma).message;
        }
    }
    exports.default = Sentence;
});
//# sourceMappingURL=sentence.js.map