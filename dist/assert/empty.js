(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty", "@dikac/t-function/assert/parameter-arguments", "./throwable/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../boolean/empty");
    const parameter_arguments_1 = require("@dikac/t-function/assert/parameter-arguments");
    const empty_2 = require("./throwable/empty");
    function Empty(value, empty = true, error = empty_2.default) {
        parameter_arguments_1.default(value, empty_1.default, (value, empty) => error(empty, value), [empty]);
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map