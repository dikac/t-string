var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/not-blank"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_blank_1 = __importDefault(require("../string/not-blank"));
    function NotBlank(string, subject = 'string') {
        return new Error(not_blank_1.default(false, string, subject));
    }
    exports.default = NotBlank;
});
//# sourceMappingURL=not-blank.js.map