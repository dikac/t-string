import Match from "./match";

/**
 * check if {@param source} is numeric
 *
 * @param source
 */
export default function Numeric(source : string) : boolean {

    return Match(source, /^[-+]*\d*(\.\d*)?$/i);
}
