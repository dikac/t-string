import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import AlphabetMessage from "../../boolean/string/alphabet";

export default function Alphabet(object : Readonly<Value<string> & Validatable>) : string {

    return AlphabetMessage(object.valid, object.value)
}
