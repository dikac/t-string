import DigitType from "../../boolean/string/digit";

export default function Digit(string : string) : Error {

    return new Error(DigitType(false, string))
}
