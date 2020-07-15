(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/match", "@dikac/t-function/assert/parameter-arguments", "./throwable/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("../boolean/match");
    const parameter_arguments_1 = require("@dikac/t-function/assert/parameter-arguments");
    const match_2 = require("./throwable/match");
    function Match(value, pattern, error = match_2.default) {
        parameter_arguments_1.default(value, match_1.default, error, [pattern]);
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map