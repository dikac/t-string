var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/boolean/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = __importDefault(require("@dikac/t-number/boolean/lower"));
    function Maximum(object) {
        return lower_1.default(object.converter(object.value), object.maximum, object.inclusive);
    }
    exports.default = Maximum;
});
//# sourceMappingURL=maximum.js.map