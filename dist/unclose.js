(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./remove-prefix-character", "./remove-suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const remove_prefix_character_1 = require("./remove-prefix-character");
    const remove_suffix_character_1 = require("./remove-suffix-character");
    /**
     * remove {@param prefix} from start and {@param suffix} from end of {@param string}
     *
     * @param string
     * @param prefix
     * @param suffix
     */
    function Unclose(string, prefix, suffix) {
        string = remove_prefix_character_1.default(string, prefix);
        string = remove_suffix_character_1.default(string, suffix);
        return string;
    }
    exports.default = Unclose;
});
//# sourceMappingURL=unclose.js.map