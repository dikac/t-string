(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./safe-cast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const safe_cast_1 = require("./safe-cast");
    function JoinAffix(strings, option) {
        return safe_cast_1.default(option.prefix) + strings.join(option.delimiter) + safe_cast_1.default(option.suffix);
    }
    exports.default = JoinAffix;
});
//# sourceMappingURL=join-affix.js.map