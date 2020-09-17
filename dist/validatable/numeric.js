import NumericFromObject from "../boolean/numeric";
export default class Numeric {
    constructor(value, message) {
        this.value = value;
        this.messageFactory = message;
        this.valid = NumericFromObject(this.value);
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
//# sourceMappingURL=numeric.js.map