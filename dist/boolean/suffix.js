(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lodash_1 = require("lodash");
    /**
     * @see startsWith
     * @param string
     * @param suffix
     */
    function Suffix(string, suffix) {
        return lodash_1.startsWith(suffix, string);
    }
    exports.default = Suffix;
});
//# sourceMappingURL=suffix.js.map