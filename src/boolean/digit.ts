import Match from "./match";

export default function Digit(source : string) : boolean {

    return Match(source, /^\d*$/i)
}
