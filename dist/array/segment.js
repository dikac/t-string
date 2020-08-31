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
    /**
     * split {@param string} to its each segment marked by {@param delimiter}
     *
     * @param string
     * @param delimiter
     */
    function Segment(string, delimiter) {
        let list = string.split(delimiter);
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