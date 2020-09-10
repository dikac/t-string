var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./padding/padding", "./prefix-character", "./suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const padding_1 = __importDefault(require("./padding/padding"));
    const prefix_character_1 = __importDefault(require("./prefix-character"));
    const suffix_character_1 = __importDefault(require("./suffix-character"));
    /**
     * add {@param character} to {@param string} if not exist and {@param string} not empty
     *
     * @param string
     * @param character
     * @param padding
     */
    function AffixCharacter(string, character, padding) {
        switch (padding) {
            case padding_1.default.PREFIX:
                return prefix_character_1.default(string, character);
            case padding_1.default.SUFFIX:
                return suffix_character_1.default(string, character);
            case padding_1.default.CIRCUMFIX:
                string = prefix_character_1.default(string, character);
                return suffix_character_1.default(string, character);
        }
    }
    exports.default = AffixCharacter;
});
//# sourceMappingURL=affix-character.js.map