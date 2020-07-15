import Guard from "../boolean/match";
import Function from "@dikac/t-function/function";
import ParameterArguments from "@dikac/t-function/assert/parameter-arguments";
import MatchError from "./throwable/match";

export default function Match(
    value : string,
    pattern : RegExp,
    error : Function<[string, RegExp], Error> = MatchError
) : asserts value is string {

    ParameterArguments(value, Guard, error, [pattern]);
}
