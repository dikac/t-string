import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MinimumObject from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Size from "../number/size";


export default class Minimum<Msg>
    implements
        Readonly<Inclusive & MinimumNumber &  Value<string> & Message<Msg> & Validatable>
{
    readonly valid : boolean;

    constructor(
        readonly value : string,
        readonly minimum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>,
        readonly converter : Function<[string], number> = Size,
    ) {

        this.valid = MinimumObject(this);
    }

    toString() : string {

        return this.value;
    }

    get message() : Msg {

        return this._message(this);
    }
}
