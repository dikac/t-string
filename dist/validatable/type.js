(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "t-validator/validatable/type", "../boolean/type", "./message-factory/en"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("t-validator/validatable/type");
    const type_2 = require("../boolean/type");
    const en_1 = require("./message-factory/en");
    class Type extends type_1.default {
        constructor(data, subject, factory = new en_1.default()) {
            super(data, type_2.default);
            this.subject = subject;
            this.factory = factory;
        }
        getMessage(data, valid) {
            return valid ? this.factory.typeValid(this.subject, data) : this.factory.typeInvalid(this.subject, data);
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map