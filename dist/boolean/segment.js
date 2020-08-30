(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/difference"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const difference_1 = require("@dikac/t-array/difference");
    function Segment(root, compare, delimiter) {
        if (root === compare) {
            return true;
        }
        return difference_1.default(root.split(delimiter), compare.split(delimiter)).length === 0;
    }
    exports.default = Segment;
});
//# sourceMappingURL=segment.js.map