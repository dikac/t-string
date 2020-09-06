import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyBoolean from "./boolean/empty";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Empty<ValueType extends string, MessageType>
    implements
        Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>

{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;

    constructor(
        readonly value : ValueType,
        message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {

        this.messageFactory = message;
        this.valid = EmptyBoolean(this);
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
