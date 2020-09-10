var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/blank"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const blank_1 = __importDefault(require("../string/blank"));
    function Blank(string, subject = 'string') {
        return new Error(blank_1.default(false, string, subject));
    }
    exports.default = Blank;
});
//# sourceMappingURL=blank.js.map