var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty", "../trim"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = __importDefault(require("../boolean/not-empty"));
    const trim_1 = __importDefault(require("../trim"));
    /**
     * create a string message, by constructing subject, predicate, object
     *
     * combine subject, predicate, object to create whole sentence
     */
    class Sentence {
        /**
         * @param valid
         * @param subject {default : 'value'}
         * @param predicate {default : {invalid : 'is not', valid : 'is'}}
         * @param object {default : 'valid'}
         */
        constructor(valid, subject = 'value', predicate = {
            invalid: 'is not',
            valid: 'is'
        }, object = 'valid') {
            this.valid = valid;
            this.subject = subject;
            this.predicate = predicate;
            this.object = object;
        }
        valueOf() {
            return this.message;
        }
        toString() {
            return this.message;
        }
        get message() {
            let messages = [];
            messages.push(this.subject);
            messages.push(this.valid ? this.predicate.valid : this.predicate.invalid);
            messages.push(this.object);
            messages = messages.filter(not_empty_1.default).map((message) => trim_1.default(message));
            return messages.join(' ');
        }
    }
    exports.default = Sentence;
});
//# sourceMappingURL=sentence.js.map