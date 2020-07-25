(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./match", "../validatable/string/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("./match");
    const match_2 = require("../validatable/string/match");
    function MatchStandard(pattern) {
        return new match_1.default(pattern, match_2.default);
    }
    exports.default = MatchStandard;
});
//# sourceMappingURL=match-standard.js.map