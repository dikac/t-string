import DigitValidatable from "../validatable/digit";
export default class Digit {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new DigitValidatable(value, this.message);
    }
}
//# sourceMappingURL=digit.js.map