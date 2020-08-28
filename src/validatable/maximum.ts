import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MaximumObject from "./boolean/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";

export default class Maximum<ValueT extends string, MessageT>
    implements
        Readonly<Inclusive & MaximumNumber & Value<ValueT> & Message<MessageT> & Validatable>
{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & MaximumNumber & Validatable>)=>MessageT;

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        message : (result:Readonly<Value<ValueT> & Inclusive & MaximumNumber & Validatable>)=>MessageT,
        readonly converter : (string:ValueT)=>number = Size,
    ) {

        this.messageFactory = message;
        this.valid = MaximumObject(this);
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this.messageFactory(this);
    }
}
