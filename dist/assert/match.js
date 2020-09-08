var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/match", "@dikac/t-function/assert/callback", "./throwable/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("../boolean/match"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const match_2 = __importDefault(require("./throwable/match"));
    function Match(value, pattern, error = match_2.default) {
        callback_1.default(value, match_1.default, error, pattern);
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map