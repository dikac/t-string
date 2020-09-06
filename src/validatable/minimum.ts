import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MinimumObject from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import ValueOf from "@dikac/t-value/value-of/value-of";


export default class Minimum<ValueType extends string, MessageType>
    implements
        Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>, ValueOf<string>
{
    readonly valid : boolean;
    private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType;

    constructor(
        readonly value : ValueType,
        readonly minimum : number,
        readonly inclusive : boolean,
        message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
        readonly converter : (value:ValueType)=>number = Count,
    ) {

        this.valid = MinimumObject(this);
        this.messageFactory = message;
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
