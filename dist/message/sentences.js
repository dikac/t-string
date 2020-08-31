(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../boolean/not-empty");
    class Sentences {
        constructor(valid, value, expectation, type) {
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
            messages.push(...this.value);
            messages.push(...(this.valid ? this.expectation.valid : this.expectation.invalid));
            messages.push(...this.type);
            messages = messages.filter(not_empty_1.default);
            return messages.join(' ');
        }
    }
    exports.default = Sentences;
});
//# sourceMappingURL=sentences.js.map