(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Validated {
        constructor(string, validator) {
            this.string = string;
            this.validatable = validator(string);
        }
        toString() {
            return this.string.toString();
        }
        get valid() {
            return this.validatable.valid;
        }
    }
    exports.default = Validated;
});
//# sourceMappingURL=validated.js.map