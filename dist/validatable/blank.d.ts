import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Callback from "./callback";
export default class Blank<ValueType extends string, MessageType> extends Callback<ValueType, MessageType> {
    constructor(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType);
}
