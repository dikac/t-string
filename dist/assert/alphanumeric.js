var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphanumeric", "@dikac/t-function/assert/callback", "./throwable/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = __importDefault(require("../boolean/alphanumeric"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const alphanumeric_2 = __importDefault(require("./throwable/alphanumeric"));
    function Alphanumeric(value, error = alphanumeric_2.default) {
        callback_1.default(value, alphanumeric_1.default, error);
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map