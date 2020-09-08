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
     * wrapper for {@see truncate}
     *
     * @param string
     * @param length
     * @param omission
     * @default "..."
     *
     * @param separator
     */
    function Truncate(string, length, omission = '...', separator) {
        return lodash_1.truncate(string, {
            length: length,
            omission: omission,
            separator: separator
        });
    }
    exports.default = Truncate;
});
//# sourceMappingURL=truncate.js.map