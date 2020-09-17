import Minimum from "./minimum";
import MinimumString from "../validatable/string/minimum";
export default function MinimumStandard(minimum, inclusive) {
    return new Minimum(minimum, inclusive, MinimumString);
}
//# sourceMappingURL=minimum-standard.js.map