var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../trim", "./not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * check if {@param string} contain non white space (\s) and not empty string {@see NotEmpty}
     *
     * @param string
     */
    const trim_1 = __importDefault(require("../trim"));
    const not_empty_1 = __importDefault(require("./not-empty"));
    function NotBlank(string) {
        return not_empty_1.default(trim_1.default(string));
    }
    exports.default = NotBlank;
});
//# sourceMappingURL=not-blank.js.map