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
    const not_empty_1 = require("../boolean/not-empty");
    const trim_1 = require("../trim");
    class Sentence {
        constructor(valid, value = 'value', expectation = {
            invalid: 'is not',
            valid: 'is'
        }, type = 'valid') {
            this.valid = valid;
            this.value = value;
            this.expectation = expectation;
            this.type = type;
        }
        valueOf() {
            return this.message;
        }
        toString() {
            return this.message;
        }
        get message() {
            let messages = [];
            messages.push(this.value);
            messages.push(this.valid ? this.expectation.valid : this.expectation.invalid);
            messages.push(this.type);
            messages = messages.filter(not_empty_1.default).map((message) => trim_1.default(message));
            return messages.join(' ');
        }
    }
    exports.default = Sentence;
});
//# sourceMappingURL=sentence.js.map