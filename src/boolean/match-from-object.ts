import Value from "@dikac/t-value/value";
import Match from "./match";


export default function MatchFromObject(
    object : Value<string> & {pattern : RegExp},
) : boolean {

    return Match(object.value, object.pattern)
}
