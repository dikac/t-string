import AlphabetType from "../string/alphabet";

export default function Alphabet(
    string : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphabetType(false, string, subject))
}
