(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/match", "@dikac/t-object/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("../value/match");
    const set_getter_1 = require("@dikac/t-object/value/set-getter");
    class Match extends match_1.default {
        constructor(value, pattern, messageFactory) {
            super(value, pattern);
            this.value = value;
            this.pattern = pattern;
            this.messageFactory = messageFactory;
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this));
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map