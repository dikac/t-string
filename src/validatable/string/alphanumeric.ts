import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import AlphanumericMessage from "../../boolean/string/alphanumeric";

export default function Alphanumeric(object : Readonly<Value<string> & Validatable>) : string {

    return AlphanumericMessage(object.valid, object.value)
}