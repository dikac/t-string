var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/blank", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const blank_1 = __importDefault(require("../boolean/blank"));
    const callback_1 = __importDefault(require("./callback"));
    class Blank extends callback_1.default {
        constructor(value, message) {
            super(value, blank_1.default, message);
        }
    }
    exports.default = Blank;
});
//# sourceMappingURL=blank.js.map