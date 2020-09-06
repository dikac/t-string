(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./prefix-character", "./suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const prefix_character_1 = require("./prefix-character");
    const suffix_character_1 = require("./suffix-character");
    /**
     * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
     * exits
     *
     * @param string
     * @param prefix
     * @param suffix
     */
    function Enclose(string, prefix, suffix) {
        string = prefix_character_1.default(string, prefix);
        string = suffix_character_1.default(string, suffix);
        return string;
    }
    exports.default = Enclose;
});
//# sourceMappingURL=enclose.js.map