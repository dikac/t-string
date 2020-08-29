(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/readonly-merge", "@dikac/t-validator/validatable/callback", "./boolean/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validator/validatable/readonly-merge");
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const match_1 = require("./boolean/match");
    class Match extends readonly_merge_1.default {
        constructor(number, match, message) {
            let container = {
                pattern: match,
                value: number,
            };
            let msg = callback_1.default(container, match_1.default, () => message(this));
            super(container, msg, msg);
            this.pattern = match;
        }
        valueOf() {
            return this.value;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map