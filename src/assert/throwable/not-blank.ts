import NotBlankType from "../string/not-blank";

export default function NotBlank(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(NotBlankType(false, string, subject))
}
