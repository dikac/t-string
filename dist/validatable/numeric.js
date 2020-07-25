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
        constructor(value, _message) {
            this.value = value;
            this._message = _message;
            this.valid = numeric_1.default(value);
        }
        toString() {
            return this.value;
        }
        get message() {
            return this._message(this);
        }
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map