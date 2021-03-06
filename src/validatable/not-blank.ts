import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotBlankBoolean from "../boolean/not-blank";
import Callback from "./callback";

export default class NotBlank<ValueType extends string, MessageType> extends Callback<ValueType, MessageType> {
    constructor(
        value : ValueType,
        message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {
        super(value, NotBlankBoolean, message)
    }

}
