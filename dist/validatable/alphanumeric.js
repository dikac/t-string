var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = __importDefault(require("../boolean/alphanumeric"));
    class Alphanumeric {
        constructor(value, message) {
            this.value = value;
            this.messageFactory = message;
            this.valid = alphanumeric_1.default(value);
        }
        valueOf() {
            return this.value;
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Alphanumeric;
});
//# sourceMappingURL=alphanumeric.js.map