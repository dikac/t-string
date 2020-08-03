import Guard from "../boolean/match";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import MatchError from "./throwable/match";

export default function Match(
    value : string,
    pattern : RegExp,
    error : Function<[string, RegExp], Error> = MatchError
) : asserts value is string {

    Callback(value, Guard, error, pattern);
}
