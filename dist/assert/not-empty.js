var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty", "@dikac/t-function/assert/callback", "./throwable/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = __importDefault(require("../boolean/not-empty"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const not_empty_2 = __importDefault(require("./throwable/not-empty"));
    function NotEmpty(value, error = not_empty_2.default) {
        callback_1.default(value, not_empty_1.default, error);
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map