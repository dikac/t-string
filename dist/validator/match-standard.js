import Match from "./match";
import MatchString from "../validatable/string/match";
export default function MatchStandard(pattern) {
    return new Match(pattern, MatchString);
}
//# sourceMappingURL=match-standard.js.map