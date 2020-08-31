import EmptyType from "../string/empty";

export default function Empty(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(EmptyType(false, string, subject))
}
