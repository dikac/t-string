(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/maximum", "../number/count"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("./boolean/maximum");
    const count_1 = require("../number/count");
    class Maximum {
        constructor(value, maximum, inclusive, message, converter = count_1.default) {
            this.value = value;
            this.maximum = maximum;
            this.inclusive = inclusive;
            this.converter = converter;
            this.messageFactory = message;
            this.valid = maximum_1.default(this);
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
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map