(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string", "../validatable/string/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("./string");
    const string_2 = require("../validatable/string/string");
    function StringStandard() {
        return new string_1.default(string_2.default);
    }
    exports.default = StringStandard;
});
//# sourceMappingURL=string-standard.js.map