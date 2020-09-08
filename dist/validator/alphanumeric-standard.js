var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./alphanumeric", "../validatable/string/alphanumeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alphanumeric_1 = __importDefault(require("./alphanumeric"));
    const alphanumeric_2 = __importDefault(require("../validatable/string/alphanumeric"));
    function AlphanumericStandard() {
        return new alphanumeric_1.default(alphanumeric_2.default);
    }
    exports.default = AlphanumericStandard;
});
//# sourceMappingURL=alphanumeric-standard.js.map