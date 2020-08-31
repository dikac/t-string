import MaximumType from "../string/maximum";

export default function Maximum(
    string : string,
    maximum : number,
    inclusive : boolean,
    subject : string = 'string',
) : Error {

    return new Error(MaximumType(false, string, maximum, inclusive, subject))
}
