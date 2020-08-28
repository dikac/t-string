(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("./boolean/not-empty");
    class NotEmpty {
        constructor(value, message) {
            this.value = value;
            this.valid = not_empty_1.default(this);
            this.messageFactory = message;
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map