var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = __importDefault(require("../string/not-empty"));
    function NotEmpty(string, subject = 'string') {
        return new Error(not_empty_1.default(false, string, subject));
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map