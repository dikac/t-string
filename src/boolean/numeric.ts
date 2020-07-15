import Match from "./match";

export default function Numeric(source : string) : boolean {

    return Match(source, /^[-+]*\d*(\.\d*)?$/i);
}
