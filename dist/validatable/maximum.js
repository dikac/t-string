(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/maximum-from-object", "../number/size"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const maximum_from_object_1 = require("../boolean/maximum-from-object");
    const size_1 = require("../number/size");
    class Maximum extends readonly_merge_1.default {
        constructor(number, maximum, inclusive, message, converter = size_1.default) {
            let container = {
                maximum: maximum,
                inclusive: inclusive,
                value: number,
                converter: converter
            };
            let msg = callback_1.default(container, maximum_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.maximum = maximum;
            this.inclusive = inclusive;
        }
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map