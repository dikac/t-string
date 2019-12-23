(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "t-validator/type", "../validatable/type", "../validatable/message-factory/en"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("t-validator/type");
    const type_2 = require("../validatable/type");
    const en_1 = require("../validatable/message-factory/en");
    class Type extends type_1.default {
        constructor(subject, factory = new en_1.default()) {
            super((value) => new type_2.default(value, subject, factory));
            this.subject = subject;
            this.factory = factory;
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map