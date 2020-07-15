(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("./match");
    function MatchFromObject(object) {
        return match_1.default(object.value, object.pattern);
    }
    exports.default = MatchFromObject;
});
//# sourceMappingURL=match-from-object.js.map