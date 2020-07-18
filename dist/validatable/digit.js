(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const digit_1 = require("../boolean/digit");
    class Digit extends readonly_merge_1.default {
        constructor(string, message) {
            let msg = callback_1.default(string, digit_1.default, () => message(this));
            super({ value: string }, msg, msg);
        }
        toString() {
            return this.value;
        }
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map