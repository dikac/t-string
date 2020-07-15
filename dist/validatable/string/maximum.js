(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maximum_1 = require("../../boolean/string/maximum");
    function Maximum(object) {
        return maximum_1.default(object.valid, object.value, object.maximum, object.inclusive);
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map