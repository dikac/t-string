(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("../string/string");
    function String(string, subject = 'type', conversion = value => typeof value) {
        return new Error(string_1.default(false, string, subject, conversion));
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map