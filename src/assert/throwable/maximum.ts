import MaximumType from "../../boolean/string/maximum";

export default function Maximum(
    string : string,
    maximum : number,
    inclusive : boolean,
) : Error {

    return new Error(MaximumType(false, string, maximum, inclusive))
}
