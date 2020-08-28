import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MinimumObject from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";


export default class Minimum<ValueT extends string, MessageT>
    implements
        Readonly<Inclusive & MinimumNumber &  Value<ValueT> & Message<MessageT> & Validatable>
{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>)=>MessageT;

    constructor(
        readonly value : ValueT,
        readonly minimum : number,
        readonly inclusive : boolean,
        message : (result:Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>)=>MessageT,
        readonly converter : (value:ValueT)=>number = Size,
    ) {

        this.valid = MinimumObject(this);
        this.messageFactory = message;
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this.messageFactory(this);
    }
}
