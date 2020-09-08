var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/boolean/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = __importDefault(require("@dikac/t-number/boolean/greater"));
    function Minimum(object) {
        return greater_1.default(object.converter(object.value), object.minimum, object.inclusive);
    }
    exports.default = Minimum;
});
//# sourceMappingURL=minimum.js.map