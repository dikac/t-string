import MinimumType from "../../boolean/string/minimum";

export default function Minimum(
    string : string,
    minimum : number,
    inclusive : boolean
) : Error {

    return new Error(MinimumType(false, string, minimum, inclusive))
}
