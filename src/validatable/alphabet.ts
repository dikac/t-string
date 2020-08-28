import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import AlphabetFromObject from "../boolean/alphabet";

export default class Alphabet<ValueT extends string, MessageT>
    implements
        Readonly<Value<ValueT> & Message<MessageT> & Validatable>

{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueT> & Validatable>)=>MessageT;

    constructor(
        readonly value : ValueT,
        message : (result:Readonly<Value<ValueT> & Validatable>)=>MessageT,
    ) {

        this.messageFactory = message;
        this.valid = AlphabetFromObject(value);
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this.messageFactory(this);
    }
}
