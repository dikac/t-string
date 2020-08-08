import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MaximumObject from "./boolean/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";

export default class Maximum<ValueT extends string, MessageT>
    implements
        Readonly<Inclusive & MaximumNumber & Value<ValueT> & Message<MessageT> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<ValueT> & Inclusive & MaximumNumber & Validatable>], MessageT>,
        readonly converter : Function<[ValueT], number> = Size,
    ) {

        this.valid = MaximumObject(this);
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this._message(this);
    }
}
