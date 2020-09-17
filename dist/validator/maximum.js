import MaximumValidatable from "../validatable/maximum";
import Count from "../number/count";
export default class Maximum {
    constructor(maximum, inclusive, message, converter = Count) {
        this.maximum = maximum;
        this.inclusive = inclusive;
        this.message = message;
        this.converter = converter;
    }
    validate(value) {
        return new MaximumValidatable(value, this.maximum, this.inclusive, this.message, this.converter);
    }
}
//# sourceMappingURL=maximum.js.map