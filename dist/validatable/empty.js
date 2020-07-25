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
        constructor(value, _message) {
            this.value = value;
            this._message = _message;
            this.valid = empty_1.default(this);
        }
        toString() {
            return this.value;
        }
        get message() {
            return this._message(this);
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map