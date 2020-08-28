import Guard from "../boolean/match";
import Callback from "@dikac/t-function/assert/callback";
import MatchError from "./throwable/match";

export default function Match(
    value : string,
    pattern : RegExp,
    error : (value:string, pattern:RegExp)=>Error = MatchError
) : asserts value is string {

    Callback(value, Guard, error, pattern);
}
