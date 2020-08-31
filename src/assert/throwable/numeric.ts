import NumericType from "../string/numeric";

export default function Numeric(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(NumericType(false, string, subject))
}
