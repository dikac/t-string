(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("./boolean/empty");
    class Empty {
        constructor(value, message) {
            this.value = value;
            this.messageFactory = message;
            this.valid = empty_1.default(this);
        }
        toString() {
            return this.value;
        }
        valueOf() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map