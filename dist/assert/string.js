var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
    const string_1 = __importDefault(require("../boolean/string"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const string_2 = __importDefault(require("./throwable/string"));
    function String(value, error = string_2.default) {
        callback_1.default(value, string_1.default, error);
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map