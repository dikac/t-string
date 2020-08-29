(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphabet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphabet_1 = require("../boolean/alphabet");
    class Alphabet {
        constructor(value, message) {
            this.value = value;
            this.messageFactory = message;
            this.valid = alphabet_1.default(value);
        }
        valueOf() {
            return this.value;
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Alphabet;
});
//# sourceMappingURL=alphabet.js.map