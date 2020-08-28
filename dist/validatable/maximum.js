(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/maximum", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("./boolean/maximum");
    const size_1 = require("../number/size");
    class Maximum {
        constructor(value, maximum, inclusive, message, converter = size_1.default) {
            this.value = value;
            this.maximum = maximum;
            this.inclusive = inclusive;
            this.converter = converter;
            this.messageFactory = message;
            this.valid = maximum_1.default(this);
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map