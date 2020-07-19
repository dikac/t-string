import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EmptyMessage from "../../boolean/string/empty";

export default function Empty(object : Readonly<Value<string> & Validatable & {empty : boolean}>) : string {

    return EmptyMessage(object.valid, object.empty, object.value)
}
