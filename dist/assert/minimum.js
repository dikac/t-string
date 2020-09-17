import Guard from "../boolean/minimum";
import Callback from "@dikac/t-function/assert/callback";
import MinimumError from "./throwable/minimum";
import Count from "../number/count";
export default function Minimum(value, minimum, inclusive, converter = Count, error = MinimumError) {
    let guard = (value, minimum, inclusive) => {
        return Guard(value, minimum, inclusive, converter);
    };
    Callback(value, guard, error, minimum, inclusive);
}
//# sourceMappingURL=minimum.js.map