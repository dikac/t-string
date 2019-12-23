(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class En {
        typeValid(subject, data) {
            return `"${subject}" type is string`;
        }
        typeInvalid(subject, data) {
            let type = typeof data;
            return `"${subject}" type expect string, "${type}" given`;
        }
    }
    exports.default = En;
});
//# sourceMappingURL=en.js.map