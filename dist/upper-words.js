(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./upper-first"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const upper_first_1 = require("./upper-first");
    function UpperWords(string, splitters) {
        if (splitters.length === 0) {
            return string;
        }
        const splitter = splitters[0];
        let temp = [];
        for (let str of string.split(splitter)) {
            temp.push(upper_first_1.default(str));
        }
        string = temp.join(splitter);
        return UpperWords(string, splitters.slice(1));
    }
    exports.default = UpperWords;
});
//# sourceMappingURL=upper-words.js.map