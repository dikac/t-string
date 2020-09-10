import BlankType from "../string/blank";

export default function Blank(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(BlankType(false, string, subject))
}
