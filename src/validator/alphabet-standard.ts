import Alphabet from "./alphabet";
import AlphabetString from "../validatable/string/alphabet";

export default function AlphabetStandard() : Alphabet<string> {

    return new Alphabet(AlphabetString);
}
