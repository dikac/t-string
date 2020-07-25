import Digit from "./digit";
import DigitString from "../validatable/string/digit";

export default function DigitStandard() : Digit<string> {

    return new Digit(DigitString);
}
