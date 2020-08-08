import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MinimumObject from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";


export default class Minimum<ValueT extends string, MessageT>
    implements
        Readonly<Inclusive & MinimumNumber &  Value<ValueT> & Message<MessageT> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : ValueT,
        readonly minimum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<ValueT> & Inclusive & MinimumNumber & Validatable>], MessageT>,
        readonly converter : Function<[ValueT], number> = Size,
    ) {

        this.valid = MinimumObject(this);
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this._message(this);
    }
}
