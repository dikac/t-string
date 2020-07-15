import Match from "./match";

export default function Alphabet(source : string) : boolean {

    return Match(source, /^[a-z]*$/i)
}
