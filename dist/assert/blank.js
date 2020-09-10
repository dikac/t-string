var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/blank", "@dikac/t-function/assert/callback", "./throwable/blank"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const blank_1 = __importDefault(require("../boolean/blank"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const blank_2 = __importDefault(require("./throwable/blank"));
    function Blank(value, error = blank_2.default) {
        callback_1.default(value, blank_1.default, error);
    }
    exports.default = Blank;
});
//# sourceMappingURL=blank.js.map