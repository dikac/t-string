import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import StringMessage from "../../assert/string/string";

export default function String(object : Readonly<Value & Validatable>) : string {

    return StringMessage(object.valid, object.value)
}
