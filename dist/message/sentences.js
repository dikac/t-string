var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty", "../trim", "../suffix-character", "../remove-suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = __importDefault(require("../boolean/not-empty"));
    const trim_1 = __importDefault(require("../trim"));
    const suffix_character_1 = __importDefault(require("../suffix-character"));
    const remove_suffix_character_1 = __importDefault(require("../remove-suffix-character"));
    /**
     * create a string message, by joining subject, (reject, or accept), expect, actual according
     * to order
     */
    class Sentences {
        /**
         * @param valid
         * @param subject
         * intended for such as 'argument', 'type', 'object.property'
         *
         * @param reject
         * @default 'must'
         * used {@param subject} if {@param valid} false
         * intended for such as 'must', 'is not'
         *
         * @param accept
         * @default 'is'
         * used {@param subject} if {@param valid} true
         * intended for such as 'must', 'is not'
         *
         * @param expect
         * expectation of value
         * intended for such as 'array', 'string' ,'lower than', <literal value>
         *
         * @param actual
         * actual of message
         * intended for such as 'array', 'string' ,'lower than', <literal value>
         *
         * @param rejects
         * orders for invalid
         * @default ['subject', 'reject', 'accept', 'expect', 'actual']
         *
         * @param accepts
         * orders for valid
         * @default ['subject', 'reject', 'accept', 'expect']
         *
         * @param comma
         * place comma after parts
         */
        constructor(valid, subject = [], expect = [], accept = [], reject = [], actual = [], accepts = ['subject', 'reject', 'accept', 'expect'], rejects = ['subject', 'reject', 'accept', 'expect', 'actual'], comma = []) {
            this.valid = valid;
            this.subject = subject;
            this.expect = expect;
            this.accept = accept;
            this.reject = reject;
            this.actual = actual;
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
            const orders = this.valid ? this.accepts : this.rejects;
            let messages = [];
            for (let order of orders) {
                if (this.valid && order === 'reject') {
                    continue;
                }
                if (!this.valid && order === 'accept') {
                    continue;
                }
                let part = this[order].map((message) => trim_1.default(message)).filter(not_empty_1.default).join(' ');
                if (this.comma.includes(order)) {
                    part = suffix_character_1.default(part, ',');
                }
                messages.push(part);
            }
            messages = messages.map((message) => trim_1.default(message)).filter(not_empty_1.default);
            let message = messages.join(' ');
            return suffix_character_1.default(remove_suffix_character_1.default(message, ','), '.');
        }
    }
    exports.default = Sentences;
});
//# sourceMappingURL=sentences.js.map