import AlphanumericValidatable from "../validatable/alphanumeric";
export default class Alphanumeric {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new AlphanumericValidatable(value, this.message);
    }
}
//# sourceMappingURL=alphanumeric.js.map