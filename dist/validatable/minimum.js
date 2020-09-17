import MinimumObject from "./boolean/minimum";
import Count from "../number/count";
export default class Minimum {
    constructor(value, minimum, inclusive, message, converter = Count) {
        this.value = value;
        this.minimum = minimum;
        this.inclusive = inclusive;
        this.converter = converter;
        this.valid = MinimumObject(this);
        this.messageFactory = message;
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
//# sourceMappingURL=minimum.js.map