import NotEmptyType from "../string/not-empty";

export default function NotEmpty(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(NotEmptyType(false, string, subject))
}
