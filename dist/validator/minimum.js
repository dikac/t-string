(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/minimum", "../number/count"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = require("../validatable/minimum");
    const count_1 = require("../number/count");
    class Minimum {
        constructor(minimum, inclusive, message, converter = count_1.default) {
            this.minimum = minimum;
            this.inclusive = inclusive;
            this.message = message;
            this.converter = converter;
        }
        validate(value) {
            return new minimum_1.default(value, this.minimum, this.inclusive, this.message, this.converter);
        }
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map