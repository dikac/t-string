import AlphabetType from "../../boolean/string/alphabet";

export default function Alphabet(string : string) : Error {

    return new Error(AlphabetType(false, string))
}
