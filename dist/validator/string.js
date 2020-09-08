var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = __importDefault(require("../validatable/string"));
    class String {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return string_1.default(value, this.message);
        }
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map