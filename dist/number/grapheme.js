var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "grapheme-splitter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const grapheme_splitter_1 = __importDefault(require("grapheme-splitter"));
    const grapheme = new grapheme_splitter_1.default();
    function Grapheme(string) {
        return grapheme.countGraphemes(string);
    }
    exports.default = Grapheme;
});
//# sourceMappingURL=grapheme.js.map