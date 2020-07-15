import Guard from "../boolean/match";
import Function from "@dikac/t-function/function";
import CallbackArguments from "@dikac/t-function/assert/callback-arguments";
import MatchError from "./throwable/match";

export default function Match(
    value : string,
    pattern : RegExp,
    error : Function<[string, RegExp], Error> = MatchError
) : asserts value is string {

    CallbackArguments(value, Guard, error, [pattern]);
}
