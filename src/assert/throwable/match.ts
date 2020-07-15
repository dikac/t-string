import MatchType from "../../boolean/string/match";

export default function Match(
    string : string,
    pattern : RegExp
) : Error {

    return new Error(MatchType(false, string, pattern))
}
