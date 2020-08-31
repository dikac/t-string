import MinimumType from "../string/minimum";

export default function Minimum(
    string : string,
    minimum : number,
    inclusive : boolean,
    subject : string = 'string',
) : Error {

    return new Error(MinimumType(false, string, minimum, inclusive, subject))
}
