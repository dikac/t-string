import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyBoolean from "./boolean/empty";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Empty<ValueT extends string, MessageT>
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
        this.valid = EmptyBoolean(this);
    }

    toString() : string {

        return this.value;
    }

    valueOf() : string {

        return this.value;
    }

    get message() : MessageT {

        return this.messageFactory(this);
    }
}
