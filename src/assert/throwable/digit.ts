import DigitType from "../string/digit";

export default function Digit(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(DigitType(false, string, subject))
}
