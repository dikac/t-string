import Match from "./match";
import MatchString from "../validatable/string/match";

export default function MatchStandard(pattern : RegExp) : Match<string> {

    return new Match(pattern, MatchString);
}
