var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty", "../trim"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * check if {@param string} is white space (\s) or empty string {@see Empty}
     *
     * @param string
     */
    const empty_1 = __importDefault(require("./empty"));
    const trim_1 = __importDefault(require("../trim"));
    function Blank(string) {
        return empty_1.default(trim_1.default(string));
    }
    exports.default = Blank;
});
//# sourceMappingURL=blank.js.map