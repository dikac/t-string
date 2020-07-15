(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const minimum_1 = require("../../boolean/string/minimum");
    function Minimum(object) {
        return minimum_1.default(object.valid, object.value, object.minimum, object.inclusive);
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map