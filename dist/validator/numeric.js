import NumericValidatable from "../validatable/numeric";
export default class Numeric {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new NumericValidatable(value, this.message);
    }
}
//# sourceMappingURL=numeric.js.map