import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import DigitFromObject from "../boolean/digit";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Digit<ValueT extends string, MessageT>
    implements
        Readonly<Value<ValueT> & Message<MessageT> & Validatable>, ValueOf<string>

{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueT> & Validatable>)=>MessageT;

    constructor(
        readonly value : ValueT,
        message : (result:Readonly<Value<ValueT> & Validatable>)=>MessageT,
    ) {

        this.messageFactory = message;
        this.valid = DigitFromObject(value);

    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this.messageFactory(this);
    }

    valueOf() : string {

        return this.value;
    }
}
