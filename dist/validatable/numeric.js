(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = require("../boolean/numeric");
    class Numeric {
        constructor(value, message) {
            this.value = value;
            this.messageFactory = message;
            this.valid = numeric_1.default(this.value);
        }
        toString() {
            return this.value;
        }
        valueOf() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map