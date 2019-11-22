(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "escape-string-regexp"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Escape = require("escape-string-regexp");
    function Trim(source, characters) {
        characters = Escape(characters);
        return source.replace(new RegExp(`(^[${characters}]*|[${characters}]*$)`, 'g'), '');
    }
    exports.default = Trim;
});
//# sourceMappingURL=trim.js.map