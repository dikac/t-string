var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-blank", "@dikac/t-function/assert/callback", "./throwable/not-blank"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_blank_1 = __importDefault(require("../boolean/not-blank"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const not_blank_2 = __importDefault(require("./throwable/not-blank"));
    function NotBlank(value, error = not_blank_2.default) {
        callback_1.default(value, not_blank_1.default, error);
    }
    exports.default = NotBlank;
});
//# sourceMappingURL=not-blank.js.map