import AlphanumericType from "../string/alphanumeric";

export default function Alphanumeric(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphanumericType(false, string, subject))
}
