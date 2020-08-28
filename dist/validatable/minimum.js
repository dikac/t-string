(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/minimum", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = require("./boolean/minimum");
    const size_1 = require("../number/size");
    class Minimum {
        constructor(value, minimum, inclusive, message, converter = size_1.default) {
            this.value = value;
            this.minimum = minimum;
            this.inclusive = inclusive;
            this.converter = converter;
            this.valid = minimum_1.default(this);
            this.messageFactory = message;
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map