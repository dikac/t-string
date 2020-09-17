import MatchType from "../string/match";
export default function Match(string, pattern, subject = 'string') {
    return new Error(MatchType(false, string, pattern, subject));
}
//# sourceMappingURL=match.js.map