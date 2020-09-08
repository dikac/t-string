var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty", "@dikac/t-function/assert/callback", "./throwable/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = __importDefault(require("../boolean/empty"));
    const callback_1 = __importDefault(require("@dikac/t-function/assert/callback"));
    const empty_2 = __importDefault(require("./throwable/empty"));
    function Empty(value, error = empty_2.default) {
        callback_1.default(value, empty_1.default, error);
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map