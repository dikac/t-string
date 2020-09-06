import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import AlphabetFromObject from "../boolean/alphabet";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Alphabet<ValueType extends string, MessageType>
    implements
        Readonly<Value<ValueType>>,
        Readonly<Message<MessageType>>,
        ValueOf<string>,
        Readonly<Validatable>

{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;

    constructor(
        readonly value : ValueType,
        message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
    ) {

        this.messageFactory = message;
        this.valid = AlphabetFromObject(value);
    }

    valueOf() : string {

        return this.value;
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageType {

        return this.messageFactory(this);
    }
}
