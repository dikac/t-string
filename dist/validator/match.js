var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("../validatable/match"));
    class Match {
        constructor(pattern, message) {
            this.pattern = pattern;
            this.message = message;
        }
        validate(value) {
            return new match_1.default(value, this.pattern, this.message);
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map