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
    function RemoveSuffixCharacter(string, character) {
        if (string.length !== 0) {
            character = character[0];
            if (string[string.length - 1] === character) {
                return string.slice(0, string.length - 1);
            }
        }
        return string;
    }
    exports.default = RemoveSuffixCharacter;
});
//# sourceMappingURL=remove-suffix-character.js.map