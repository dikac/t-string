import AlphanumericFromObject from "../boolean/alphanumeric";
export default class Alphanumeric {
    constructor(value, message) {
        this.value = value;
        this.messageFactory = message;
        this.valid = AlphanumericFromObject(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
    get message() {
        return this.messageFactory(this);
    }
}
//# sourceMappingURL=alphanumeric.js.map