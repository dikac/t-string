(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/string", "@dikac/t-function/assert/callback", "./throwable/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("../boolean/string");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const string_2 = require("./throwable/string");
    function String(value, error = string_2.default) {
        callback_1.default(value, string_1.default, error);
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map