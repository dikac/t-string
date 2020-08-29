(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./padding/padding"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const padding_1 = require("./padding/padding");
    function Padding(string, padding, length, mode) {
        switch (mode) {
            case padding_1.default.PREFIX:
                return string.padStart(length, padding);
            case padding_1.default.SUFFIX:
                return string.padEnd(length, padding);
            case padding_1.default.AFFIX:
                const offset = (length - string.length) / 2;
                const prefix = ''.padStart(Math.ceil(offset), padding);
                const suffix = ''.padEnd(Math.floor(offset), padding);
                return prefix + string + suffix;
        }
    }
    exports.default = Padding;
});
//# sourceMappingURL=padding.js.map