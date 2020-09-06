import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NumericFromObject from "../boolean/numeric";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Numeric<ValueType extends string, MessageType>
    implements
        Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>

{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType

    constructor(
        readonly value : ValueType,
        message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {

        this.messageFactory = message;
        this.valid = NumericFromObject(this.value);
    }

    toString() : string {

        return this.value;
    }

    valueOf() : string {

        return this.value;
    }

    get message() : MessageType {

        return this.messageFactory(this);
    }
}
