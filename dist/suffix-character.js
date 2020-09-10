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
     * append {@param character} to {@param string} if not exist and {@param string} not empty
     *
     * @param string
     * @param character
     */
    function SuffixCharacter(string, character) {
        if (string.length !== 0) {
            character = character[0];
            if (string[string.length - 1] !== character) {
                return string + character;
            }
        }
        return string;
    }
    exports.default = SuffixCharacter;
});
//# sourceMappingURL=suffix-character.js.map