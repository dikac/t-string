(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Segment(segment, delimiter) {
        let list = segment.split(delimiter);
        let length = list.length;
        let adds = [];
        for (let i = 1; i <= length; i++) {
            adds.push(list.slice(0, i).join(delimiter));
        }
        return adds;
    }
    exports.default = Segment;
});
//# sourceMappingURL=segment.js.map