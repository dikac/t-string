import MatchType from "../string/match";

export default function Match(
    string : string,
    pattern : RegExp,
    subject : string = 'string',
) : Error {

    return new Error(MatchType(false, string, pattern, subject))
}
