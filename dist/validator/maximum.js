(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/maximum", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("../validatable/maximum");
    const size_1 = require("../number/size");
    class Maximum {
        constructor(maximum, inclusive, message, converter = size_1.default) {
            this.maximum = maximum;
            this.inclusive = inclusive;
            this.message = message;
            this.converter = converter;
        }
        validate(value) {
            return new maximum_1.default(value, this.maximum, this.inclusive, this.message, this.converter);
        }
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map