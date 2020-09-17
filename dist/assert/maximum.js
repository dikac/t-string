import Guard from "../boolean/maximum";
import Callback from "@dikac/t-function/assert/callback";
import MaximumError from "./throwable/maximum";
import Count from "../number/count";
export default function Maximum(value, maximum, inclusive, converter = Count, error = MaximumError) {
    let guard = (value, maximum, inclusive) => {
        return Guard(value, maximum, inclusive, converter);
    };
    Callback(value, guard, error, maximum, inclusive);
}
//# sourceMappingURL=maximum.js.map