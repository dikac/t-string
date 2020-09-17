import Guard from "../boolean/match";
import Callback from "@dikac/t-function/assert/callback";
import MatchError from "./throwable/match";
export default function Match(value, pattern, error = MatchError) {
    Callback(value, Guard, error, pattern);
}
//# sourceMappingURL=match.js.map