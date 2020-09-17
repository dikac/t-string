import MaximumObject from "./boolean/maximum";
import Count from "../number/count";
export default class Maximum {
    constructor(value, maximum, inclusive, message, converter = Count) {
        this.value = value;
        this.maximum = maximum;
        this.inclusive = inclusive;
        this.converter = converter;
        this.messageFactory = message;
        this.valid = MaximumObject(this);
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
//# sourceMappingURL=maximum.js.map