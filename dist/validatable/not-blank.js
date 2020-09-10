var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-blank", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_blank_1 = __importDefault(require("../boolean/not-blank"));
    const callback_1 = __importDefault(require("./callback"));
    class NotBlank extends callback_1.default {
        constructor(value, message) {
            super(value, not_blank_1.default, message);
        }
    }
    exports.default = NotBlank;
});
//# sourceMappingURL=not-blank.js.map