import StringValidatable from "../validatable/string";
export default class String {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return StringValidatable(value, this.message);
    }
}
//# sourceMappingURL=string.js.map