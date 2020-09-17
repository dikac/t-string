import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
export default class Minimum {
    constructor(minimum, inclusive, message, converter = Count) {
        this.minimum = minimum;
        this.inclusive = inclusive;
        this.message = message;
        this.converter = converter;
    }
    validate(value) {
        return new MinimumValidatable(value, this.minimum, this.inclusive, this.message, this.converter);
    }
}
//# sourceMappingURL=minimum.js.map