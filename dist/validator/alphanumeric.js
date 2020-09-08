var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = __importDefault(require("../validatable/alphanumeric"));
    class Alphanumeric {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new alphanumeric_1.default(value, this.message);
        }
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map