(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./padding/padding", "./pad-prefix", "./pad-suffix", "./pad-circumfix"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const padding_1 = require("./padding/padding");
    const pad_prefix_1 = require("./pad-prefix");
    const pad_suffix_1 = require("./pad-suffix");
    const pad_circumfix_1 = require("./pad-circumfix");
    function Pad(string, padding, length, mode) {
        switch (mode) {
            case padding_1.default.PREFIX:
                return pad_prefix_1.default(string, length, padding);
            case padding_1.default.SUFFIX:
                return pad_suffix_1.default(string, length, padding);
            case padding_1.default.CIRCUMFIX:
                return pad_circumfix_1.default(string, length, padding);
        }
    }
    exports.default = Pad;
});
//# sourceMappingURL=pad.js.map