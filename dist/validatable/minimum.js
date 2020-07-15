(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/readonly-merge", "@dikac/t-validatable/message/callback", "../boolean/minimum-from-object", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validatable/message/readonly-merge");
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const minimum_from_object_1 = require("../boolean/minimum-from-object");
    const size_1 = require("../number/size");
    class Minimum extends readonly_merge_1.default {
        constructor(number, minimum, inclusive, message, converter = size_1.default) {
            let container = {
                minimum: minimum,
                inclusive: inclusive,
                value: number,
                converter: converter
            };
            let msg = callback_1.default(container, minimum_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.minimum = minimum;
            this.inclusive = inclusive;
        }
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map